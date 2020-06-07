package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class UserInfoSaveRequestDto {

    private String user_email;

    private String name;
    private String birth;
    private String email;
    private String gender;
    private String phone;

    private HighschoolSaveRequestDto highschool;
    private UniversitySaveRequestDto university;

    private List<AwardSaveRequestDto> awards;
    private List<CareerSaveRequestDto> careers;
    private List<LicenceSaveRequestDto> licences;

    public UserInfoSaveRequestDto(String user_email, String name, String birth, String email, String gender,
                                  String phone, HighschoolSaveRequestDto highschool,
                                  UniversitySaveRequestDto university, List<AwardSaveRequestDto> awards,
                                  List<CareerSaveRequestDto> careers, List<LicenceSaveRequestDto> licences) {
        this.user_email = user_email;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.highschool = highschool;
        this.university = university;
        this.awards = awards;
        this.careers = careers;
        this.licences = licences;
    }

    @Builder


    public UserInfo toEntity(User user) {
        return UserInfo.builder()
                .name(name)
                .birth(birth)
                .email(email)
                .gender(gender)
                .phone(phone)
                .user(user)
                .build();
    }
}
