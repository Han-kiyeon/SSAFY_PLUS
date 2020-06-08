package com.ssafy.springboot.web.dto.user;


import com.ssafy.springboot.domain.user.Role;
import com.ssafy.springboot.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UserJwtResponsetDto {

    private Long user_id;
    private String email;
    private String name;
    private String position;
    private String season;
    private String section;
    private String profile_img;

    private Role role;

    public UserJwtResponsetDto(User entity) {
        this.user_id = entity.getUser_id();
        this.email = entity.getEmail();
        this.name = entity.getName();
        this.position = entity.getPosition();
        this.season = entity.getSeason();
        this.section = entity.getSection();
        this.profile_img = entity.getProfile_img();
        this.role = entity.getRole();
    }
}
