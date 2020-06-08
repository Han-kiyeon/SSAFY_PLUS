package com.ssafy.springboot.web.dto.userInfo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CareerUpdateRequestDto {

    private Long career_id;
    private String name;
    private String position;
    private String duration;
    private String description;

    @Builder
    public CareerUpdateRequestDto(Long career_id, String name, String position, String duration, String description) {
        this.career_id = career_id;
        this.name = name;
        this.position = position;
        this.duration = duration;
        this.description = description;
    }
}
