package com.ssafy.springboot.domain.user;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.springboot.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity {

    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 오토 인크리먼트
    private Long user_id; // 1, 2, 3, ...

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String nickname;

    @Column
    private String position; //교육생, 졸업생, 프로, 컨설턴드, 코치 ....

    @Column
    private String season; // 기수

    @Column
    private String section; // 반

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column
    private String profile_img;

    @Column
    private Long answer_like;


    @Builder
    public User(Long user_id, String email, String password, String name, String nickname,
                String position, String season, String section, String profile_img, Role role) {
        this.user_id = user_id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.position = position;
        this.season = season;
        this.section = section;
        if (profile_img != null)
            this.profile_img = profile_img;
        else
            this.profile_img = "./src/userimg/user.jpg";
        this.role = role;
        this.answer_like = Long.valueOf(0);
    }


    // 수정
    public void update(String password, String position, String season, String section, String profile_img) {
        if (password != null)
            this.password = password;
        if (profile_img != null)
            this.position = position;
        if (profile_img != null)
            this.season = season;
        if (profile_img != null)
            this.section = section;
        if (profile_img != null)
            this.profile_img = profile_img;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
                ", position='" + position + '\'' +
                ", season='" + season + '\'' +
                ", section='" + section + '\'' +
                ", role=" + role +
                ", profile_img='" + profile_img + '\'' +
                '}';
    }
}
