package com.ssafy.springboot.web.dto.portfolio.project;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.project.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ProjectSaveRequestDto {

    private String name;
    private String period;
    private String description;

    private String stacks;
    private String big_image_url;
    private String small_image_url;
    private List<String> roles;
    private List<String> my_stacks;

    private String url;


    @Builder
    public ProjectSaveRequestDto(String name, String period, String description,
                                 String stacks, String big_image_url, String small_image_url, List<String> roles,
                                 List<String> my_stacks, String url) {
        this.name = name;
        this.period = period;
        this.description = description;
        this.stacks = stacks;
        this.big_image_url = big_image_url;
        this.small_image_url = small_image_url;
        this.roles = roles;
        this.my_stacks = my_stacks;
        this.url = url;
    }

    public Project toEntity(Portfolio portfolio) {
        return Project.builder()
                .description(description)
                .name(name)
                .period(period)
                .url(url)
                .roles(roles)
                .my_stacks(my_stacks)
                .stacks(stacks)
                .big_image_url(big_image_url)
                .small_image_url(small_image_url)
                .portfolio(portfolio)
                .build();
    }
}
