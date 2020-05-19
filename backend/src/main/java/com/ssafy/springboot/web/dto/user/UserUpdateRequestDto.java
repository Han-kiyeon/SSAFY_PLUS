package com.ssafy.springboot.web.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserUpdateRequestDto {
    private String upass;
    private String uphone;
    private String unickname;
    private String upic;

    @Builder
    public UserUpdateRequestDto(String upass, String uphone, String unickname, String upic) {
        this.upass = upass;
        this.uphone = uphone;
        this.unickname = unickname;
        this.upic=upic;
    }
}
