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
public class Career {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long career_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_info_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_info_id")
    private UserInfo userInfo;

    private String name;
    private String position;
    private String duration;
    private String description;

    @Builder
    public Career(UserInfo userInfo, String name, String position, String duration, String description) {
        this.userInfo = userInfo;
        this.name = name;
        this.position = position;
        this.duration = duration;
        this.description = description;
    }

    public void update(String name, String position, String duration, String description) {
        if (name != null) this.name = name;
        if (position != null) this.position = position;
        if (duration != null) this.duration = duration;
        if (description != null) this.description = description;
    }
}
