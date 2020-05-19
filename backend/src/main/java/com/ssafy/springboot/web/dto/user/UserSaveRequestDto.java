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
    private String password;
    private String name;
    private String position;
    private String season;
    private String section;
    private String profile_img;

    private Role role;

    @Builder
    public UserSaveRequestDto(String email, String password, String name,
                              String position, String season, String section,
                              String profile_img, Role role) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.position = position;
        this.season = season;
        this.section = section;
        this.profile_img = profile_img;
        this.role = role;
    }

    public User toEntity() {
        return User.builder()
                .email(email)
                .password(password)
                .name(name)
                .position(position)
                .season(season)
                .section(section)
                .profile_img(profile_img)
                .role(role)
                .build();
    }
}
