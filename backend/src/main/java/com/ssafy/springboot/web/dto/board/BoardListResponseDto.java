package com.ssafy.springboot.web.dto.board;

import com.ssafy.springboot.domain.board.Board;
import lombok.Getter;

import java.time.LocalDateTime;


@Getter
public class BoardListResponseDto {

    private Long board_id;
    private String manager_email;
    private String title;
    private String contents;
    private String topic;
    private String type;
    private LocalDateTime created_date;
    private LocalDateTime modified_date;
    private Long post_cnt;


    public BoardListResponseDto(Board entity) {
        this.board_id = entity.getBoard_id();
        this.manager_email = entity.getUser().getEmail();
        this.type = entity.getType();
        this.title = entity.getTitle();
        this.contents = entity.getContents();
        this.topic = entity.getTopic();
        this.created_date = entity.getCreatedDate();
        this.modified_date = entity.getModifiedDate();
        this.post_cnt = entity.getPost_cnt();
    }

}