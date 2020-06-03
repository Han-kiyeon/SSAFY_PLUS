package com.ssafy.springboot.web.dto.userInfo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HighschoolUpdateRequestDto {

    private Long highschool_id;
    private String name;
    private String location;
    private String duration;

    @Builder
    public HighschoolUpdateRequestDto(Long highschool_id, String name, String location, String duration) {
        this.highschool_id = highschool_id;
        this.name = name;
        this.location = location;
        this.duration = duration;
    }
}
