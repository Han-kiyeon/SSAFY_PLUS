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

    @ElementCollection
    private List<String> characters;

    @ElementCollection
    private List<String> my_stacks;

    @Builder
    public Portfolio(User user, String title, String name, String birth, String email, String phone
            , List<String> characters, List<String> my_stacks) {
        this.title = title;
        this.user = user;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.characters = characters;
        this.my_stacks = my_stacks;
    }

    public void update(String title, String name, String birth, String email, String phone, List<String> characters
            , List<String> my_stacks) {
        if (title != null) this.title = title;
        if (name != null) this.name = name;
        if (birth != null) this.birth = birth;
        if (email != null) this.email = email;
        if (phone != null) this.phone = phone;
        if (characters != null) this.characters = characters;
        if (my_stacks != null) this.my_stacks = my_stacks;
    }

}
