package com.ssafy.springboot.web.dto.comment;

import com.ssafy.springboot.domain.comment.Comment;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentSaveRequestDto {

    private String user_email;
    private Long post_id;
    private String content;


    @Builder
    public CommentSaveRequestDto(String user_email, Long post_id, String content) {
        this.user_email = user_email;
        this.post_id = post_id;
        this.content = content;
    }


    public Comment toEntity(User user, Posts post) {
        return Comment.builder()
                .user(user)
                .post(post)
                .content(content)
                .build();
    }
}
