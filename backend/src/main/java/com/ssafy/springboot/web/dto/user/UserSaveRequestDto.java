package com.ssafy.springboot.web.dto.user;

import com.ssafy.springboot.domain.user.Role;

import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserSaveRequestDto {
    private String email;
    private String name;
    private String password;
    private String position;
    private String season;
    private String section;
    private Role role;


    @Builder
    public UserSaveRequestDto(String email, String name, String password, String position, String season, String section, Role role) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.position = position;
        this.season = season;
        this.section = section;
        this.role = role;
    }



    public User toEntity() {
        return User.builder()
                .email(email)
                .name(name)
                .password(password)
                .position(position)
                .season(season)
                .section(section)
                .role(role)
                .build();
    }
}