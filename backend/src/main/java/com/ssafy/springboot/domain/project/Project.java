package com.ssafy.springboot.domain.project;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.portfolio.Portfolio;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
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

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "portfolio_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

    @Builder
    public Project(Portfolio portfolio, String name, String period, String description, List<String> stacks, List<String> roles, String url) {
        this.portfolio = portfolio;
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
}
