package com.ssafy.springboot.web.dto.post;

import com.ssafy.springboot.domain.post.Posts;

import lombok.Getter;

@Getter
public class PostsResponseDto {

    private Long post_id;
    private String title;
    private String content;
    private String user_email;
    private Long board_id;
    private Long comment_cnt;
    private Long like_cnt;

    public PostsResponseDto(Posts entity) {
        this.comment_cnt = entity.getComment_cnt();
        this.like_cnt = entity.getLike_cnt();
        this.post_id = entity.getPost_id();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.user_email = entity.getUser().getEmail();
        this.board_id = entity.getBoard().getBoard_id();
    }
}