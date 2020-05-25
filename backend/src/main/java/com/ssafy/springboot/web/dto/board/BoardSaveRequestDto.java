package com.ssafy.springboot.web.dto.board;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardSaveRequestDto {

    private String manager_email;
    private String title;
    private String contents;
    private String topic;
    private String type;
    private String password;


    @Builder
    public BoardSaveRequestDto(String manager_email, String title, String contents, String topic, String type, String password) {
        this.manager_email = manager_email;
        this.title = title;
        this.contents = contents;
        this.topic = topic;
        this.type = type;
        this.password = password;
    }

    public Board toEntity(User user) {
        return Board.builder()
                .title(title)
                .contents(contents)
                .topic(topic)
                .type(type)
                .password(password)
                .user(user)
                .build();
    }
}
