package com.ssafy.springboot.domain.portfolio;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Portfolio {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long portfolio_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;

    private String name;
    private String birth;
    private String email;
    private String phone;

    @ElementCollection
    private List<String> characters;
    @ElementCollection
    private List<String> skills;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "projects")
    @JsonBackReference
    private List<Project> Projects;

    @Builder
    public Portfolio(User user, String name, String birth, String email, String phone) {
        this.user = user;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.characters = new ArrayList<String>();
        this.skills = new ArrayList<String>();
        this.Projects = new ArrayList<Project>();
    }

}
