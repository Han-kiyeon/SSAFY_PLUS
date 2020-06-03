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

    private String user_email;

    private String title;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private List<String> characters;
    private List<String> my_stacks;
    private List<SkillUpdateRequestDto> skills;
    private List<ProjectUpdateRequestDto> projects;

    @Builder
    public PortfolioUpdateRequestDto(String title, String user_email, String name, String birth, String email, String phone
            , List<String> characters, List<String> my_stacks, List<SkillUpdateRequestDto> skills, List<ProjectUpdateRequestDto> projects) {
        this.user_email = user_email;

        this.title = title;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.characters = characters;
        this.my_stacks = my_stacks;
        this.skills = skills;
        this.projects = projects;
    }
}
