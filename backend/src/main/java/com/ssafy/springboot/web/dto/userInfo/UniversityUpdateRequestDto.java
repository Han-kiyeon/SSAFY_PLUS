package com.ssafy.springboot.web.dto.userInfo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UniversityUpdateRequestDto {

    private Long university_id;
    private String name;
    private String location;
    private String duration;
    private String major;
    private String minor;
    private String grade;
    private String classification;

    @Builder

    public UniversityUpdateRequestDto(Long university_id, String name, String location, String duration, String major, String minor, String grade, String classification) {
        this.university_id = university_id;
        this.name = name;
        this.location = location;
        this.duration = duration;
        this.major = major;
        this.minor = minor;
        this.grade = grade;
        this.classification = classification;
    }
}
