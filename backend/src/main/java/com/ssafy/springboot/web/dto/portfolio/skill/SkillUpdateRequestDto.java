package com.ssafy.springboot.web.dto.portfolio.skill;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class SkillUpdateRequestDto {

    private Long skill_id;
    private String name;
    private Long percentage;
    private String description;


    @Builder
    public SkillUpdateRequestDto(Long skill_id, String name, Long percentage, String description) {
        this.skill_id = skill_id;
        this.name = name;
        this.percentage = percentage;
        this.description = description;
    }
}