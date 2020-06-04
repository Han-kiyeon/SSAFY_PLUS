package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.domain.userInfo.*;
import com.ssafy.springboot.web.dto.userInfo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserInfoService {

    private final UserRepository userRepository;
    private final UserInfoRepository userInfoRepository;

    private final AwardRepository awardRepository;
    private final CareerRepository careerRepository;
    private final HighschoolRepository highschoolRepository;
    private final LicenceRepository licenceRepository;
    private final UniversityRepository universityRepository;

    @Transactional(readOnly = true)
    public List<UserInfoResponseDto> findAll() {
        List<UserInfoResponseDto> ret = userInfoRepository.findAll()
                .stream()
                .map(UserInfoResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < ret.size(); i++) {
            Long id = ret.get(i).getUser_info_id();
            ret.get(i).setAwards(
                    awardRepository.findAllByUserInfoId(id)
                            .stream()
                            .map(AwardResponseDto::new)
                            .collect(Collectors.toList())
            );
            ret.get(i).setCareers(
                    careerRepository.findAllByUserInfoId(id)
                            .stream()
                            .map(CareerResponseDto::new)
                            .collect(Collectors.toList())
            );
            ret.get(i).setLicences(
                    licenceRepository.findAllByUserInfoId(id)
                            .stream()
                            .map(LicenceResponseDto::new)
                            .collect(Collectors.toList())
            );
            ret.get(i).setHighschool(new HighschoolResponseDto(
                    highschoolRepository.findAllByUserInfoId(id)));
            ret.get(i).setUniversity(new UniversityResponseDto(
                    universityRepository.findAllByUserInfoId(id)));
        }

        return ret;
    }


    @Transactional
    public UserInfoResponseDto findByEmail(String email) {
        User user = userRepository.findByEmail(email);

        UserInfoResponseDto ret = new UserInfoResponseDto(
                userInfoRepository.findByUserID(user.getUser_id()));

        Long id = ret.getUser_info_id();
        System.out.println(id);
        ret.setAwards(
                awardRepository.findAllByUserInfoId(id)
                        .stream()
                        .map(AwardResponseDto::new)
                        .collect(Collectors.toList())
        );
        ret.setCareers(
                careerRepository.findAllByUserInfoId(id)
                        .stream()
                        .map(CareerResponseDto::new)
                        .collect(Collectors.toList())
        );
        ret.setLicences(
                licenceRepository.findAllByUserInfoId(id)
                        .stream()
                        .map(LicenceResponseDto::new)
                        .collect(Collectors.toList())
        );
        ret.setHighschool(new HighschoolResponseDto(
                highschoolRepository.findAllByUserInfoId(id)));
        ret.setUniversity(new UniversityResponseDto(
                universityRepository.findAllByUserInfoId(id)));

        return ret;
    }

    @Transactional
    public UserInfoResponseDto findById(Long id) {

        UserInfo entity = userInfoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("UserInfo does not exist... id=" + id));

        UserInfoResponseDto ret = new UserInfoResponseDto(entity);

        ret.setAwards(
                awardRepository.findAllByUserInfoId(ret.getUser_info_id())
                        .stream()
                        .map(AwardResponseDto::new)
                        .collect(Collectors.toList())
        );

        ret.setCareers(
                careerRepository.findAllByUserInfoId(ret.getUser_info_id())
                        .stream()
                        .map(CareerResponseDto::new)
                        .collect(Collectors.toList())
        );
        ret.setLicences(
                licenceRepository.findAllByUserInfoId(ret.getUser_info_id())
                        .stream()
                        .map(LicenceResponseDto::new)
                        .collect(Collectors.toList())
        );
        ret.setHighschool(new HighschoolResponseDto(
                highschoolRepository.findAllByUserInfoId(ret.getUser_info_id())));
        ret.setUniversity(new UniversityResponseDto(
                universityRepository.findAllByUserInfoId(ret.getUser_info_id())));

        return ret;
    }

    //save
    @Transactional
    public ResponseEntity<?> save(UserInfoSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User Not found");

        UserInfo userInfo = userInfoRepository.save(requestDto.toEntity(user));

        for (AwardSaveRequestDto dto : requestDto.getAwards()) {
            awardRepository.save(dto.toEntity(userInfo));
        }
        for (CareerSaveRequestDto dto : requestDto.getCareers()) {
            careerRepository.save(dto.toEntity(userInfo));
        }
        for (LicenceSaveRequestDto dto : requestDto.getLicences()) {
            licenceRepository.save(dto.toEntity(userInfo));
        }
        highschoolRepository.save(requestDto.getHighschool().toEntity(userInfo));
        universityRepository.save(requestDto.getUniversity().toEntity(userInfo));

        return ResponseEntity.status(HttpStatus.OK).body("Success");
    }

    //update
    @Transactional
    public Long update(Long id, UserInfoUpdateRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return Long.valueOf(-1);

        UserInfo userInfo = userInfoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("UserInfo does not exist... id=" + id));

        userInfo.update(requestDto.getName(), requestDto.getBirth(), requestDto.getEmail(), requestDto.getGender(),
                requestDto.getPhone(), requestDto.getProfile_image_url());

        if (requestDto.getAwards() != null) {
            List<Award> awards = awardRepository.findAllByUserInfoId(userInfo.getUser_info_id());
            for (Award a : awards) {
                boolean flag = true;
                for (AwardUpdateRequestDto dto : requestDto.getAwards()) {
                    if (dto.getAward_id() == a.getAward_id()) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    awardRepository.delete(a);
                }
            }

            for (AwardUpdateRequestDto dto : requestDto.getAwards()) {
                if (dto.getAward_id() == null) {
                    awardRepository.save(
                            new AwardSaveRequestDto(
                                    dto.getType(), dto.getName(), dto.getDate(),
                                    dto.getGrade(), dto.getAssociation()
                            ).toEntity(userInfo)
                    );
                    continue;
                }
                for (Award a : awards) {
                    if (dto.getAward_id() == a.getAward_id()) {
                        a.update(
                                dto.getType(), dto.getName(), dto.getDate(),
                                dto.getGrade(), dto.getAssociation()
                        );
                        break;
                    }
                }
            }
        }

        if (requestDto.getCareers() != null) {
            List<Career> careers = careerRepository.findAllByUserInfoId(userInfo.getUser_info_id());
            for (Career c : careers) {
                boolean flag = true;
                for (CareerUpdateRequestDto dto : requestDto.getCareers()) {
                    if (dto.getCareer_id() == c.getCareer_id()) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    careerRepository.delete(c);
                }
            }

            for (CareerUpdateRequestDto dto : requestDto.getCareers()) {
                if (dto.getCareer_id() == null) {
                    careerRepository.save(
                            new CareerSaveRequestDto(
                                    dto.getName(), dto.getPosition(), dto.getDuration(),
                                    dto.getDescription()
                            ).toEntity(userInfo)
                    );
                    continue;
                }
                for (Career c : careers) {
                    if (dto.getCareer_id() == c.getCareer_id()) {
                        c.update(
                                dto.getName(), dto.getPosition(), dto.getDuration(),
                                dto.getDescription()
                        );
                        break;
                    }
                }
            }
        }

        if (requestDto.getLicences() != null) {
            List<Licence> licences = licenceRepository.findAllByUserInfoId(userInfo.getUser_info_id());
            for (Licence l : licences) {
                boolean flag = true;
                for (LicenceUpdateRequestDto dto : requestDto.getLicences()) {
                    if (dto.getLicnece_id() == l.getLicence_id()) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    licenceRepository.delete(l);
                }
            }

            for (LicenceUpdateRequestDto dto : requestDto.getLicences()) {
                if (dto.getLicnece_id() == null) {
                    licenceRepository.save(
                            //String type, String name, String date, String grade, String association
                            new LicenceSaveRequestDto(
                                    dto.getType(), dto.getName(), dto.getDate(),
                                    dto.getGrade(), dto.getAssociation()
                            ).toEntity(userInfo)
                    );
                    continue;
                }
                for (Licence l : licences) {
                    if (dto.getLicnece_id() == l.getLicence_id()) {
                        l.update(
                                dto.getType(), dto.getName(), dto.getDate(),
                                dto.getGrade(), dto.getAssociation()
                        );
                        break;
                    }
                }
            }
        }
        if (requestDto.getHighschool() != null) {
            Highschool h = highschoolRepository.findAllByUserInfoId(userInfo.getUser_info_id());
            HighschoolUpdateRequestDto dto = requestDto.getHighschool();
            h.update(dto.getName(), dto.getLocation(), dto.getDuration());
        }
        if (requestDto.getUniversity() != null) {
            University u = universityRepository.findAllByUserInfoId(userInfo.getUser_info_id());
            UniversityUpdateRequestDto dto = requestDto.getUniversity();
            u.update(
                    dto.getName(), dto.getLocation(), dto.getDuration(),
                    dto.getMajor(), dto.getMinor(), dto.getGrade(), dto.getClassification()
            );
        }
        return id;
    }

    //delete
    @Transactional
    public void delete(Long id) {
        UserInfo userInfo = userInfoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("UserInfo does not exist... id=" + id));

        List<Award> awards = awardRepository.findAllByUserInfoId(userInfo.getUser_info_id());
        for (Award a : awards) awardRepository.delete(a);
        List<Career> careers = careerRepository.findAllByUserInfoId(userInfo.getUser_info_id());
        for (Career c : careers) careerRepository.delete(c);
        List<Licence> licences = licenceRepository.findAllByUserInfoId(userInfo.getUser_info_id());
        for (Licence l : licences) licenceRepository.delete(l);

        Highschool h = highschoolRepository.findAllByUserInfoId(userInfo.getUser_info_id());
        highschoolRepository.delete(h);
        University u = universityRepository.findAllByUserInfoId(userInfo.getUser_info_id());
        universityRepository.delete(u);

        userInfoRepository.delete(userInfo);
    }
}
