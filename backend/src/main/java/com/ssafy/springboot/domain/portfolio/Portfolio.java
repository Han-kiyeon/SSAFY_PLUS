package com.ssafy.springboot.domain.portfolio;

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
public class Portfolio extends BaseTimeEntity {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long portfolio_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    private String title;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private String profile_image_url;


    @ElementCollection
    private List<String> characters;


    @Builder
    public Portfolio(User user, String title, String name, String birth, String email, String phone, String profile_image_url
            , List<String> characters) {
        this.title = title;
        this.user = user;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.profile_image_url = profile_image_url;
        this.characters = characters;
    }

    public void update(String title, String name, String birth, String email, String phone, String profile_image_url, List<String> characters) {
        if (title != null) this.title = title;
        if (name != null) this.name = name;
        if (birth != null) this.birth = birth;
        if (email != null) this.email = email;
        if (phone != null) this.phone = phone;
        if (profile_image_url != null) this.profile_image_url = profile_image_url;
        if (characters != null) this.characters = characters;
    }

}
