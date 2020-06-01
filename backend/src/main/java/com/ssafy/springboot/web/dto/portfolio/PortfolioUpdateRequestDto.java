package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.web.dto.portfolio.project.ProjectUpdateRequestDto;
import com.ssafy.springboot.web.dto.portfolio.skill.SkillUpdateRequestDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PortfolioUpdateRequestDto {

    private Long skill_id;
    private String user_email;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private List<String> characters;
    private List<SkillUpdateRequestDto> skills;
    private List<ProjectUpdateRequestDto> projects;

    @Builder
    public PortfolioUpdateRequestDto(Long skill_id, String user_email, String name, String birth, String email, String phone
            , List<String> characters, List<SkillUpdateRequestDto> skills, List<ProjectUpdateRequestDto> projects) {
        this.skill_id = skill_id;
        this.user_email = user_email;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.characters = characters;
        this.skills = skills;
        this.projects = projects;
    }
}