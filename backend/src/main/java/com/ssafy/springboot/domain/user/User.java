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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column
    private String upic;


    public User(Long uuid) {
        this.uuid=uuid;
    }

    @Builder
    public User(String uid, String upass, String uemail, String unickname, Role role, String upic) {
        this.uid = uid;
        this.upass = upass;
        this.uemail = uemail;
        this.unickname = unickname;
        this.role = role;
        if(upic!=null) this.upic=upic;
        else this.upic="./src/userimg/user.jpg";
    }

    // 수정
    public void update(String upass,String unickname,String upic) {
        this.upass = upass;
        this.unickname = unickname;
        this.upic=upic;
    }
}
