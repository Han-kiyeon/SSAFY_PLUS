package com.ssafy.springboot.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponseDto {
    private String accessToken;
    private String tokenType = "Bearer";
    private String email;
    private String name;

    public JwtResponseDto(String accessToken, String email, String name) {
        this.accessToken = accessToken;
        this.email = email;
        this.name = name;
    }

}