package com.ssafy.springboot.web.dto.portfolio.skill;

import com.ssafy.springboot.domain.portfolio.skill.Skill;
import lombok.Getter;



@Getter
public class SkillListResponseDto {

    private Long skill_id;
    private String name;
    private Long percentage;
    private String description;

    public SkillListResponseDto(Skill entity) {
        this.skill_id = entity.getSkill_id();
        this.name = entity.getName();
        this.percentage = entity.getPercentage();
        this.description = entity.getDescription();
    }
}