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
    private List<String> stacks;
    private List<String> roles;
    private String url;


    @Builder
    public ProjectUpdateRequestDto(Long project_id, String name, String period, String description,
                                   List<String> stacks, List<String> roles, String url) {
        this.project_id = project_id;
        this.name = name;
        this.period = period;
        this.description = description;
        this.stacks = stacks;
        this.roles = roles;
        this.url = url;
    }
}