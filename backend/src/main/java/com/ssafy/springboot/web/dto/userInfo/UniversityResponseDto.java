package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.University;
import lombok.Getter;

@Getter
public class UniversityResponseDto {

    private String name;
    private String location;
    private String duration;
    private String major;
    private String minor;
    private String grade;
    private String classification;

    public UniversityResponseDto(University entity) {
        this.name = entity.getName();
        this.location = entity.getLocation();
        this.duration = entity.getDuration();
        this.major = entity.getMajor();
        this.minor = entity.getMinor();
        this.grade = entity.getGrade();
        this.classification = entity.getClassification();
    }
}
