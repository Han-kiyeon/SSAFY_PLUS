package com.ssafy.springboot.web.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserJwtRequestDto {
    private String uid;
    private String upass;

    @Builder
    public UserJwtRequestDto(String uid,String upass){
        this.uid=uid;
        this.upass=upass;
    }
}
