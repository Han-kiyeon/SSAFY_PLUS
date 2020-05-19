package com.ssafy.springboot.web.dto.user;


import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserDeleteRequestDto {
    String email;

    UserDeleteRequestDto(String email) {
        this.email = email;
    }
}
