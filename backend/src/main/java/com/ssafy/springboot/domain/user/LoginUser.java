package com.ssafy.springboot.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class LoginUser {
    private String email;
    private String password;
    private String name;

    @Builder
    public LoginUser(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }


}