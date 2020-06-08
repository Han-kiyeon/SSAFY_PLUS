package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.Award;
import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AwardSaveRequestDto {

    private String type;
    private String name;
    private String date;
    private String grade;
    private String association;

    @Builder
    public AwardSaveRequestDto(String type, String name, String date, String grade, String association) {
        this.type = type;
        this.name = name;
        this.date = date;
        this.grade = grade;
        this.association = association;
    }

    public Award toEntity(UserInfo userInfo) {
        return Award.builder()
                .type(type)
                .name(name)
                .date(date)
                .grade(grade)
                .association(association)
                .userInfo(userInfo)
                .build();
    }
}
