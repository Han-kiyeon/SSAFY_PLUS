package com.ssafy.springboot.web.dto.userInfo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LicenceUpdateRequestDto {

    private Long licnece_id;
    private String type;
    private String name;
    private String date;
    private String grade;
    private String association;

    @Builder
    public LicenceUpdateRequestDto(Long licnece_id, String type, String name, String date, String grade, String association) {
        this.licnece_id = licnece_id;
        this.type = type;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.association = association;
    }
}
