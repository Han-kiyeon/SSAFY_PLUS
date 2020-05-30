package com.ssafy.springboot.domain.portfolio.project;

import com.ssafy.springboot.domain.portfolio.PortfolioProject;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Project {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long project_id;

    private String name;
    private String period;
    private String description;

    @ElementCollection
    private List<String> stacks;
    @ElementCollection
    private List<String> roles;

    private String url;


    @Builder
    public Project(String name, String period, String description, List<String> stacks, List<String> roles, String url) {
        this.name = name;
        this.period = period;
        this.description = description;
        this.stacks = stacks;
        this.roles = roles;
        this.url = url;
    }

    public void update(String name, String period, String description, List<String> stacks, List<String> roles, String url) {
        if (name != null)
            this.name = name;
        if (period != null)
            this.period = period;
        if (description != null)
            this.description = description;
        if (stacks != null)
            this.stacks = stacks;
        if (roles != null)
            this.roles = roles;
        if (url != null)
            this.url = url;
    }

    @Override
    public String toString() {
        return "Project{" +
                "project_id=" + project_id +
                ", name='" + name + '\'' +
                ", period='" + period + '\'' +
                ", description='" + description + '\'' +
                ", stacks=" + stacks +
                ", roles=" + roles +
                ", url='" + url + '\'' +
                '}';
    }
}
