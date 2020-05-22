package com.ssafy.springboot.web.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserJwtRequestDto {
    private String email;
    private String password;

    @Builder
    public UserJwtRequestDto(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
