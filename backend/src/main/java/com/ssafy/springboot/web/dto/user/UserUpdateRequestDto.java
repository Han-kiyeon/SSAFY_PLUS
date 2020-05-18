package com.ssafy.springboot.web.dto.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class UserUpdateRequestDto {

    private String name;
    private String password;
    private String position;
    private String season;
    private String section;

    @Builder
    public UserUpdateRequestDto(String name, String password, String position, String season, String section) {
        this.name = name;
        this.password = password;
        this.position = position;
        this.season = season;
        this.section = section;
    }


    public String ListToString(List<String> list) {
        StringBuilder sb = new StringBuilder();
        if(list != null) {
            for(int i=0; i<list.size(); i++){
                sb.append(list.get(i));
                if(i != (list.size() - 1)) {
                    sb.append(" ");
                }
            }
            return sb.toString();
        }
        else {
            return "";
        }
    }
}