package com.ssafy.springboot.domain.userInfo;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.portfolio.Portfolio;
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
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_info_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

    private String name;
    private String birth;
    private String email;
    private String gender;
    private String phone;

    @Builder
    public UserInfo(User user, String name, String birth, String email, String gender, String phone) {
        this.user = user;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
    }

    public void update(String name, String birth, String email, String gender, String phone) {
        if (name != null) this.name = name;
        if (birth != null) this.birth = birth;
        if (email != null) this.email = email;
        if (gender != null) this.gender = gender;
        if (phone != null) this.phone = phone;
    }
}
