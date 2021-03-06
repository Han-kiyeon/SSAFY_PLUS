package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.web.dto.portfolio.project.ProjectListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.skill.SkillListResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
public class PortfolioListResponseDto {

    private Long portfolio_id;
    private String user_email;

    private String title;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private String profile_image_url;

    private List<String> characters;
    private List<SkillListResponseDto> skills;
    private List<ProjectListResponseDto> projects;

    public PortfolioListResponseDto(Portfolio entity) {
        this.portfolio_id = entity.getPortfolio_id();
        this.user_email = entity.getUser().getEmail();
        this.title = entity.getTitle();
        this.name = entity.getName();
        this.birth = entity.getBirth();
        this.email = entity.getEmail();
        this.phone = entity.getPhone();
        this.profile_image_url = getProfile_image_url();
        this.characters = entity.getCharacters();
        this.skills = new ArrayList<>();
        this.projects = new ArrayList<>();
    }
}