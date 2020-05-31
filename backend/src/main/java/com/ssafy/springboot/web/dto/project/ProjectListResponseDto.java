package com.ssafy.springboot.web.dto.project;

import com.ssafy.springboot.domain.project.Project;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
public class ProjectListResponseDto {

    private Long project_id;
    private String name;
    private String period;
    private String desc;
    private List<String> stacks;
    private List<String> roles;
    private String url;

    public ProjectListResponseDto(Project entity) {
        this.project_id = entity.getProject_id();
        this.name = entity.getName();
        this.period = entity.getPeriod();
        this.desc = entity.getDescription();
        this.stacks = entity.getStacks();
        this.roles = entity.getRoles();
        this.url = entity.getUrl();
    }
}