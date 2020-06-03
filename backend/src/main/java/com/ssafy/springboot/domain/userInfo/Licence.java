package com.ssafy.springboot.domain.userInfo;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Licence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long licence_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_info_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_info_id")
    private UserInfo userInfo;

    private String type;
    private String name;
    private String date;
    private String grade;
    private String association;

    @Builder
    public Licence(UserInfo userInfo, String type, String name, String date, String grade, String association) {
        this.userInfo = userInfo;
        this.type = type;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.association = association;
    }

    public void update(String type, String name, String date, String grade, String association) {
        if (type != null) this.type = type;
        if (name != null) this.name = name;
        if (date != null) this.date = date;
        if (grade != null) this.grade = grade;
        if (association != null) this.association = association;
    }
}
