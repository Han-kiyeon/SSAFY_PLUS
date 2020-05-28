package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.domain.portfolio.Project;
import lombok.Getter;

import java.util.List;


@Getter
public class ProjectListResponseDto {

    private Long project_id;
    private String name;
    private String period;
    private String desc;
    private List<String> stacks;
    private List<String> roles;
    private String pjt_url;

    public ProjectListResponseDto(Project entity) {
        this.project_id = entity.getProject_id();
        this.name = entity.getName();
        this.period = entity.getPeriod();
        this.desc = entity.getDesc();
        this.stacks = entity.getStacks();
        this.roles = entity.getRoles();
        this.pjt_url = entity.getPjt_url();
    }
}