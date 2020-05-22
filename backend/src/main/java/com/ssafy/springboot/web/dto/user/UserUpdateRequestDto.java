package com.ssafy.springboot.web.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserUpdateRequestDto {

    private String password;
    private String position;
    private String season;
    private String section;
    private String profile_img;

    @Builder

    public UserUpdateRequestDto(String password, String position,
                                String season, String section, String profile_img) {
        this.password = password;
        this.position = position;
        this.season = season;
        this.section = section;
        this.profile_img = profile_img;
    }
}
