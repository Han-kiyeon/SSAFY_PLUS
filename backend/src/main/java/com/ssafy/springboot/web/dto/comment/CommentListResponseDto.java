package com.ssafy.springboot.web.dto.comment;

import com.ssafy.springboot.domain.comment.Comment;
import lombok.Getter;

@Getter
public class CommentListResponseDto {
    private Long comment_id;
    private String user_email;
    private Long post_id;
    private String content;
    private Long like_cnt;

    public CommentListResponseDto(Comment entity) {
        this.comment_id = entity.getComment_id();
        this.user_email = entity.getUser().getEmail();
        this.post_id = entity.getPost().getPost_id();
        this.content = entity.getContent();
        this.like_cnt = entity.getLike_cnt();
    }
}
