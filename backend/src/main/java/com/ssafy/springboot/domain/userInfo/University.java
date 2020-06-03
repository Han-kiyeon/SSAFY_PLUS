package com.ssafy.springboot.domain.userInfo;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class University extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long university_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_info_id")
    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_info_id")
    private UserInfo userInfo;

    private String name;
    private String location;
    private String duration;
    private String major;
    private String minor;
    private String grade;
    private String classification;

    @Builder
    public University(UserInfo userInfo, String name, String location, String duration, String major, String minor,
                      String grade, String classification) {
        this.userInfo = userInfo;
        this.name = name;
        this.location = location;
        this.duration = duration;
        this.major = major;
        this.minor = minor;
        this.grade = grade;
        this.classification = classification;
    }

    public void update(String name, String location, String duration, String major, String minor,
                       String grade, String classification) {
        if (name != null) this.name = name;
        if (location != null) this.location = location;
        if (duration != null) this.duration = duration;
        if (major != null) this.major = major;
        if (minor != null) this.minor = minor;
        if (grade != null) this.grade = grade;
        if (classification != null) this.classification = classification;
    }
}