package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.Highschool;
import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HighschoolSaveRequestDto {

    private String name;
    private String location;
    private String duration;

    @Builder
    public HighschoolSaveRequestDto(String name, String location, String duration) {
        this.name = name;
        this.location = location;
        this.duration = duration;
    }

    public Highschool toEntity(UserInfo userInfo) {
        return Highschool.builder()
                .name(name)
                .location(location)
                .duration(duration)
                .userInfo(userInfo)
                .build();
    }
}
