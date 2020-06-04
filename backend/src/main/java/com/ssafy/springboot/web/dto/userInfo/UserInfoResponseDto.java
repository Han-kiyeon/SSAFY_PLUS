package com.ssafy.springboot.web.dto.userInfo;

import com.ssafy.springboot.domain.userInfo.UserInfo;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class UserInfoResponseDto {

    private Long user_info_id;
    private String user_email;
    private String name;
    private String birth;
    private String email;
    private String gender;
    private String phone;
    private String profile_image_url;

    private HighschoolResponseDto highschool;
    private UniversityResponseDto university;

    private List<AwardResponseDto> awards;
    private List<CareerResponseDto> careers;
    private List<LicenceResponseDto> licences;


    public UserInfoResponseDto(UserInfo entity) {
        this.user_info_id = entity.getUser_info_id();
        this.user_email = entity.getUser().getEmail();
        this.name = entity.getName();
        this.birth = entity.getBirth();
        this.email = entity.getEmail();
        this.gender = entity.getGender();
        this.phone = entity.getPhone();
        this.profile_image_url = entity.getProfile_image_url();
        this.awards = new ArrayList<>();
        this.careers = new ArrayList<>();
        this.highschool = null;
        this.licences = new ArrayList<>();
        this.university = null;
    }
}
