package com.ssafy.springboot.domain.portfolio;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
    private String desc;

    @ElementCollection
    private List<String> stacks;
    @ElementCollection
    private List<String> roles;

    private String pjt_url;

    @Builder
    public Project(String name, String period, String desc, List<String> stacks, List<String> roles, String pjt_url) {
        this.name = name;
        this.period = period;
        this.desc = desc;
        this.stacks = stacks;
        this.roles = roles;
        this.pjt_url = pjt_url;
    }

    public void update(String name, String period, String desc, List<String> stacks, List<String> roles, String pjt_url) {
        this.name = name;
        this.period = period;
        this.desc = desc;
        this.stacks = stacks;
        this.roles = roles;
        this.pjt_url = pjt_url;
    }
}
