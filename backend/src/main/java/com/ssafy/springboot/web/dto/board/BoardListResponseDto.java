package com.ssafy.springboot.web.dto.board;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.user.User;
import lombok.Getter;


@Getter
public class BoardListResponseDto {

    private Long board_id;
    private String manager_email;
    private String title;
    private String contents;
    private String topic;
    private String type;
    private String password;


    public BoardListResponseDto(Board entity) {
        this.board_id = entity.getBoard_id();
        this.manager_email = entity.getUser().getEmail();
        this.type = entity.getType();
        this.title = entity.getTitle();
        this.contents = entity.getContents();
        this.password = entity.getPassword();
        this.topic = entity.getTopic();
    }

}