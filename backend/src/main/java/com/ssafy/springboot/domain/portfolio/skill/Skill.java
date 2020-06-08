package com.ssafy.springboot.domain.portfolio.skill;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.portfolio.Portfolio;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Skill {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long skill_id;

    private String name;
    private Long percentage;
    private String description;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "portfolio_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;

    @Builder
    public Skill(Portfolio portfolio, String name, Long percentage, String description) {
        this.portfolio = portfolio;
        this.name = name;
        this.percentage = percentage;
        this.description = description;
    }

    public void update(String name, Long percentage, String description) {
        if (name != null) this.name = name;
        if (percentage != null) this.percentage = percentage;
        if (description != null) this.description = description;
    }
}
