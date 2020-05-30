package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.project.Project;
import com.ssafy.springboot.domain.user.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;


@Getter
public class PortfolioListResponseDto {

    private Long user_id;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private List<String> characters;
    private List<String> skills;
    private List<Project> projects;

    public PortfolioListResponseDto(Portfolio entity) {
        this.user_id = entity.getUser().getUser_id();
        this.name = entity.getName();
        this.birth = entity.getBirth();
        this.email = entity.getEmail();
        this.phone = entity.getPhone();
        this.characters = entity.getCharacters();
        this.skills = entity.getSkills();
//        this.projects = entity.getProjects();
    }
}