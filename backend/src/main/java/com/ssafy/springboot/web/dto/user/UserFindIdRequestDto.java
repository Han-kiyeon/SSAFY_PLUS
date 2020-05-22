package com.ssafy.springboot.web.dto.user;


import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserFindIdRequestDto {
    String email;
    String name;

    public UserFindIdRequestDto(String email, String name) {
        this.email = email;
        this.name = name;
    }
}
