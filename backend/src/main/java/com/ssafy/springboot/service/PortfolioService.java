package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.PortfolioRepository;
import com.ssafy.springboot.domain.portfolio.project.Project;
import com.ssafy.springboot.domain.portfolio.project.ProjectRepository;
import com.ssafy.springboot.domain.portfolio.skill.Skill;
import com.ssafy.springboot.domain.portfolio.skill.SkillRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.portfolio.PortfolioListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioUpdateRequestDto;
import com.ssafy.springboot.web.dto.portfolio.project.ProjectListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.project.ProjectSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.project.ProjectUpdateRequestDto;
import com.ssafy.springboot.web.dto.portfolio.skill.SkillListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.skill.SkillSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.skill.SkillUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class PortfolioService {

    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;
    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    @Transactional(readOnly = true)
    public List<PortfolioListResponseDto> findAll() {
        List<PortfolioListResponseDto> ret = portfolioRepository.findAll()
                .stream()
                .map(PortfolioListResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < ret.size(); i++) {
            ret.get(i).setProjects(
                    projectRepository.findAllByPortfolioId(ret.get(i).getPortfolio_id())
                            .stream()
                            .map(ProjectListResponseDto::new)
                            .collect(Collectors.toList())
            );
            ret.get(i).setSkills(
                    skillRepository.findAllByPortfolioId(ret.get(i).getPortfolio_id())
                            .stream()
                            .map(SkillListResponseDto::new)
                            .collect(Collectors.toList())
            );
        }
        return ret;
    }


    @Transactional(readOnly = true)
    public PortfolioListResponseDto findById(Long id) {
        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Portfolio does not exist... id=" + id));

        PortfolioListResponseDto ret = new PortfolioListResponseDto(entity);

        ret.setProjects(
                projectRepository.findAllByPortfolioId(ret.getPortfolio_id())
                        .stream()
                        .map(ProjectListResponseDto::new)
                        .collect(Collectors.toList())
        );
        ret.setSkills(
                skillRepository.findAllByPortfolioId(ret.getPortfolio_id())
                        .stream()
                        .map(SkillListResponseDto::new)
                        .collect(Collectors.toList())
        );

        return ret;
    }

    @Transactional
    public ResponseEntity<?> save(PortfolioSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User Not found");
        Portfolio portfolio = portfolioRepository.save(requestDto.toEntity(user));
        for (SkillSaveRequestDto dto : requestDto.getSkills()) {
            skillRepository.save(dto.toEntity(portfolio));
        }
        for (ProjectSaveRequestDto dto : requestDto.getProjects()) {
            projectRepository.save(dto.toEntity(portfolio));
        }
        return ResponseEntity.
                status(HttpStatus.OK).
                body("Success");
    }

    @Transactional
    public Long update(Long id, PortfolioUpdateRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return Long.valueOf(-1);

        Portfolio portfolio = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Portfolio does not exist... id=" + id));

        portfolio.update(requestDto.getTitle(), requestDto.getName(), requestDto.getBirth(), requestDto.getEmail(),
                requestDto.getPhone(), requestDto.getCharacters());
        if (requestDto.getProjects() != null) {
            List<Project> projects = projectRepository.findAllByPortfolioId(portfolio.getPortfolio_id());
            //삭제
            for (Project p : projects) {
                boolean flag = true;
                for (ProjectUpdateRequestDto dto : requestDto.getProjects()) {
                    if (dto.getProject_id() == p.getProject_id()) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    projectRepository.delete(p);
                }
            }

            for (ProjectUpdateRequestDto dto : requestDto.getProjects()) {
                //새로저장
                if (dto.getProject_id() == null) {
                    projectRepository.save(
                            new ProjectSaveRequestDto(
                                    dto.getName(), dto.getPeriod(), dto.getDescription(),
                                    dto.getStacks(), dto.getRoles(), dto.getUrl()
                            ).toEntity(portfolio));
                    continue;
                }
                //수정
                for (Project p : projects) {
                    if (p.getProject_id() == dto.getProject_id()) {
                        p.update(dto.getName(), dto.getPeriod(), dto.getDescription(), dto.getStacks(), dto.getRoles(), dto.getUrl());
                        break;
                    }
                }
            }
        }

        if (requestDto.getSkills() != null) {
            List<Skill> skills = skillRepository.findAllByPortfolioId(portfolio.getPortfolio_id());
            //삭제
            for (Skill s : skills) {
                boolean flag = true;
                for (SkillUpdateRequestDto dto : requestDto.getSkills()) {
                    if (dto.getSkill_id() == s.getSkill_id()) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    skillRepository.delete(s);
                }
            }

            for (SkillUpdateRequestDto dto : requestDto.getSkills()) {
                //새로저장
                if (dto.getSkill_id() == null) {
                    skillRepository.save(
                            new SkillSaveRequestDto(
                                    dto.getName(), dto.getPercentage(), dto.getDescription()
                            ).toEntity(portfolio));
                }
                //수정
                for (Skill s : skills) {
                    if (s.getSkill_id() == dto.getSkill_id()) {
                        s.update(dto.getName(), dto.getPercentage(), dto.getDescription());
                        break;
                    }
                }
            }
        }
        return id;
    }

    @Transactional
    public void delete(Long id) {
        Portfolio portfolio = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Portfolio does not exist... id=" + id));

        List<Project> projects = projectRepository.findAllByPortfolioId(portfolio.getPortfolio_id());
        for (Project p : projects) projectRepository.delete(p);
        List<Skill> skills = skillRepository.findAllByPortfolioId(portfolio.getPortfolio_id());
        for (Skill s : skills) skillRepository.delete(s);
        portfolioRepository.delete(portfolio);
    }


    @Transactional
    public List<PortfolioListResponseDto> findByUser(String email) {
        User user = userRepository.findByEmail(email);

        List<PortfolioListResponseDto> ret = portfolioRepository.findByUser(user.getUser_id())
                .stream()
                .map(PortfolioListResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < ret.size(); i++) {
            ret.get(i).setProjects(
                    projectRepository.findAllByPortfolioId(ret.get(i).getPortfolio_id())
                            .stream()
                            .map(ProjectListResponseDto::new)
                            .collect(Collectors.toList())
            );
            ret.get(i).setSkills(
                    skillRepository.findAllByPortfolioId(ret.get(i).getPortfolio_id())
                            .stream()
                            .map(SkillListResponseDto::new)
                            .collect(Collectors.toList())
            );
        }

        return ret;
    }


}
