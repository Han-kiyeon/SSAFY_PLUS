package com.ssafy.springboot.domain.user;

import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.web.dto.user.UserUpdateRequestDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter //클래스 내 모든 필드의 Getter 메소드를 자동생성
@NoArgsConstructor //기본 생성자 자동추가
@Entity //테이블과 링크될 클래스임을 나타냄(카멜케이스->언더스코어네이밍)
public class User extends BaseTimeEntity {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long user_id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    private String position;

    private String season;

    private String section;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Builder
    public User(String email, String name, String password, String position, String season, String section, Role role) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.position = position;
        this.season = season;
        this.section = section;
        this.role = role;
    }

    public User update(UserUpdateRequestDto userUpdateRequestDto) {
        if (userUpdateRequestDto.getPassword() != null) this.password = userUpdateRequestDto.getPassword();
        if (userUpdateRequestDto.getName() != null) this.name = userUpdateRequestDto.getName();
        if (userUpdateRequestDto.getPosition() != null) this.position = userUpdateRequestDto.getPosition();
        if (userUpdateRequestDto.getSeason() != null) this.season = userUpdateRequestDto.getSeason();
        if (userUpdateRequestDto.getSection() != null) this.section = userUpdateRequestDto.getSection();

        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}
