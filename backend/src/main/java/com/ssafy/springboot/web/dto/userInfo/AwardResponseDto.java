package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.Award;
import lombok.Getter;

@Getter
public class AwardResponseDto {

    private String type;
    private String name;
    private String date;
    private String grade;
    private String association;

    public AwardResponseDto(Award entity) {
        this.type = entity.getType();
        this.name = entity.getName();
        this.date = entity.getDate();
        this.grade = entity.getGrade();
        this.association = entity.getAssociation();
    }
}
