package com.ssafy.springboot.web.dto.board;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardUpdateRequestDto {
    private String manager_email;
    private String title;
    private String contents;
    private String topic;
    private String type;
    private String password;

    @Builder
    public BoardUpdateRequestDto(String manager_email, String title, String contents, String topic, String type, String password) {
        this.manager_email = manager_email;
        this.title = title;
        this.contents = contents;
        this.topic = topic;
        this.type = type;
        this.password = password;
    }
}
