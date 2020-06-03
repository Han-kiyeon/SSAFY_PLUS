package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.Licence;
import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LicenceSaveRequestDto {

    private String type;
    private String name;
    private String date;
    private String grade;
    private String association;

    @Builder
    public LicenceSaveRequestDto(String type, String name, String date, String grade, String association) {
        this.type = type;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.association = association;
    }

    public Licence toEntity(UserInfo userInfo) {
        return Licence.builder()
                .type(type)
                .name(name)
                .date(date)
                .grade(grade)
                .association(association)
                .build();
    }
}
