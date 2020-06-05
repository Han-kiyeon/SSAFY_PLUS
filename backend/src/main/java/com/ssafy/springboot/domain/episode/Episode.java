package com.ssafy.springboot.domain.episode;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.domain.user.User;
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
public class Episode extends BaseTimeEntity {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long episode_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;

    private String title;

    @ElementCollection
    private List<String> strength;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Builder
    public Episode(User user, String title, List<String> strength, String content) {
        this.user = user;
        this.title = title;
        this.strength = strength;
        this.content = content;
    }

    public void update(String title, List<String> strength, String content) {
        if (title != null) this.title = title;
        if (strength != null) this.strength = strength;
        if (content != null) this.content = content;
    }
}
