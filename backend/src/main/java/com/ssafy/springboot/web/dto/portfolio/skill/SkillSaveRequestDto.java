package com.ssafy.springboot.web.dto.portfolio.skill;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.skill.Skill;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class SkillSaveRequestDto {
    private String name;
    private Long percentage;
    private String description;


    @Builder
    public SkillSaveRequestDto(String name, Long percentage, String description) {
        this.name = name;
        this.percentage = percentage;
        this.description = description;

    }

    public Skill toEntity(Portfolio portfolio) {
        return Skill.builder()
                .description(description)
                .name(name)
                .percentage(percentage)
                .portfolio(portfolio)
                .build();
    }
}
