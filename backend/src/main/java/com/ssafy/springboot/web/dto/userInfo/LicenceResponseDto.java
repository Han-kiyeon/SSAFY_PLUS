package com.ssafy.springboot.web.dto.userInfo;


import com.ssafy.springboot.domain.userInfo.Licence;
import lombok.Getter;


@Getter
public class LicenceResponseDto {

    private Long licence_id;
    private String type;
    private String name;
    private String date;
    private String grade;
    private String association;

    public LicenceResponseDto(Licence entity) {
        this.licence_id = entity.getLicence_id();
        this.type = entity.getType();
        this.name = entity.getName();
        this.date = entity.getDate();
        this.grade = entity.getGrade();
        this.association = entity.getAssociation();
    }
}
