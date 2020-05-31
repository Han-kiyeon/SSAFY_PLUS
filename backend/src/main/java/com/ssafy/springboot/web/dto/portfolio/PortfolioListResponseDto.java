package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import lombok.Getter;

import java.util.List;


@Getter
public class PortfolioListResponseDto {

    private String user_email;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private List<String> characters;
    private List<String> skills;

    public PortfolioListResponseDto(Portfolio entity) {
        this.user_email = entity.getUser().getEmail();
        this.name = entity.getName();
        this.birth = entity.getBirth();
        this.email = entity.getEmail();
        this.phone = entity.getPhone();
        this.characters = entity.getCharacters();
        this.skills = entity.getSkills();
    }
}