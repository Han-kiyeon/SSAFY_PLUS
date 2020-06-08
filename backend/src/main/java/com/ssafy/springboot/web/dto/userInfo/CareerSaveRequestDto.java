package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.Career;
import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CareerSaveRequestDto {

    private String name;
    private String position;
    private String duration;
    private String description;

    @Builder
    public CareerSaveRequestDto(String name, String position, String duration, String description) {
        this.name = name;
        this.position = position;
        this.duration = duration;
        this.description = description;
    }

    public Career toEntity(UserInfo userInfo) {
        return Career.builder()
                .name(name)
                .position(position)
                .duration(duration)
                .description(description)
                .userInfo(userInfo)
                .build();
    }
}
