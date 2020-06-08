package com.ssafy.springboot.web.dto.userInfo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class UserInfoUpdateRequestDto {

    private String user_email;

    private String name;
    private String birth;
    private String email;
    private String gender;
    private String phone;

    private HighschoolUpdateRequestDto highschool;
    private UniversityUpdateRequestDto university;

    private List<AwardUpdateRequestDto> awards;
    private List<CareerUpdateRequestDto> careers;
    private List<LicenceUpdateRequestDto> licences;

    @Builder

    public UserInfoUpdateRequestDto(String user_email, String name, String birth, String email, String gender,
                                    String phone, HighschoolUpdateRequestDto highschool,
                                    UniversityUpdateRequestDto university, List<AwardUpdateRequestDto> awards,
                                    List<CareerUpdateRequestDto> careers, List<LicenceUpdateRequestDto> licences) {
        this.user_email = user_email;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.highschool = highschool;
        this.university = university;
        this.awards = awards;
        this.careers = careers;
        this.licences = licences;
    }
}
