package com.ssafy.springboot.web.dto.portfolio.project;

import com.ssafy.springboot.domain.portfolio.project.Project;
import lombok.Getter;

import java.util.List;


@Getter
public class ProjectListResponseDto {

    private Long project_id;
    private String name;
    private String period;
    private String desc;
    private String stacks;
    private String big_image_url;
    private String small_image_url;
    private List<String> roles;
    private String url;

    public ProjectListResponseDto(Project entity) {
        this.project_id = entity.getProject_id();
        this.name = entity.getName();
        this.period = entity.getPeriod();
        this.desc = entity.getDescription();
        this.stacks = entity.getStacks();
        this.big_image_url = entity.getBig_image_url();
        this.small_image_url = entity.getSmall_image_url();
        this.roles = entity.getRoles();
        this.url = entity.getUrl();
    }
}