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
public class Highschool {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long highschool_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_info_id")
    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_info_id")
    private UserInfo userInfo;

    private String name;
    private String location;
    private String duration;

    @Builder
    public Highschool(UserInfo userInfo, String name, String location, String duration) {
        this.userInfo = userInfo;
        this.name = name;
        this.location = location;
        this.duration = duration;
    }

    public void update(String name, String location, String duration) {
        if (name != null) this.name = name;
        if (location != null) this.location = location;
        if (duration != null) this.duration = duration;
    }
}
