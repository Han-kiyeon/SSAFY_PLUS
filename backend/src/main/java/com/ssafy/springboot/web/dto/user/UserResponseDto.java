package com.ssafy.springboot.web.dto.user;


import com.ssafy.springboot.domain.user.Role;
import com.ssafy.springboot.domain.user.User;
import lombok.Getter;

@Getter
public class UserResponseDto {

    private String email;
    private String password;
    private String name;
    private String position;
    private String season;
    private String section;
    private String profile_img;
    private Long answer_like;

    private Role role;

    public UserResponseDto(User entity) {
        this.email = entity.getEmail();
        this.name = entity.getName();
        this.password = entity.getPassword();
        this.position = entity.getPosition();
        this.season = entity.getSeason();
        this.section = entity.getSection();
        this.profile_img = entity.getProfile_img();
        this.role = entity.getRole();
        this.answer_like = entity.getAnswer_like();
    }
}
