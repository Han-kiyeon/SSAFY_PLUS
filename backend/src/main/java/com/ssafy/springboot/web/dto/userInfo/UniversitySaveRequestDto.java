package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.University;
import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UniversitySaveRequestDto {

    private String name;
    private String location;
    private String duration;
    private String major;
    private String minor;
    private String grade;
    private String classification;

    @Builder
    public UniversitySaveRequestDto(String name, String location, String duration, String major, String minor, String grade, String classification) {
        this.name = name;
        this.location = location;
        this.duration = duration;
        this.major = major;
        this.minor = minor;
        this.grade = grade;
        this.classification = classification;
    }

    public University toEntity(UserInfo userInfo) {
        return University.builder()
                .name(name)
                .location(location)
                .duration(duration)
                .major(major)
                .minor(minor)
                .grade(grade)
                .classification(classification)
                .userInfo(userInfo)
                .build();
    }
}
