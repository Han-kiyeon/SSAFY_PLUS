package com.ssafy.springboot.web.dto.userInfo;


import com.ssafy.springboot.domain.userInfo.Highschool;
import lombok.Getter;

@Getter
public class HighschoolResponseDto {

    private Long highschool_id;
    private String name;
    private String location;
    private String duration;

    public HighschoolResponseDto(Highschool entity) {
        this.highschool_id = entity.getHighschool_id();
        this.name = entity.getName();
        this.location = entity.getLocation();
        this.duration = entity.getDuration();
    }
}
