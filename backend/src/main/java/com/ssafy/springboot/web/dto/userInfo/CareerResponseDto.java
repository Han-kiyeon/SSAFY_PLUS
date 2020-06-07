package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.Career;
import lombok.Getter;

@Getter
public class CareerResponseDto {

    private String name;
    private String position;
    private String duration;
    private String description;

    public CareerResponseDto(Career entity) {
        this.name = entity.getName();
        this.position = entity.getPosition();
        this.duration = entity.getDuration();
        this.description = entity.getDescription();
    }
}
