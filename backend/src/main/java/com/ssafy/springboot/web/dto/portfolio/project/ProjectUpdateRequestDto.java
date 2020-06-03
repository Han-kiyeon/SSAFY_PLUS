package com.ssafy.springboot.web.dto.portfolio.project;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ProjectUpdateRequestDto {

    private Long project_id;
    private String name;
    private String period;
    private String description;
    private String stacks;
    private String big_image_url;
    private String small_image_url;
    private List<String> roles;
    private String url;


    @Builder
    public ProjectUpdateRequestDto(Long project_id, String name, String period, String description,
                                   String stacks, String big_image_url, String small_image_url, List<String> roles, String url) {
        this.project_id = project_id;
        this.name = name;
        this.period = period;
        this.description = description;
        this.stacks = stacks;
        this.big_image_url = big_image_url;
        this.small_image_url = small_image_url;
        this.roles = roles;
        this.url = url;
    }
}