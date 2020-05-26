package com.ssafy.springboot.web.dto.post;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.post.PostLike;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostLikeSaveRequestDto {

    private String user_email;
    private Long post_id;

    @Builder
    public PostLikeSaveRequestDto(String user_email, Long post_id) {
        this.user_email = user_email;
        this.post_id = post_id;
    }


    public PostLike toEntity(User user, Posts post) {
        return PostLike.builder()
                .user(user)
                .post(post)
                .build();
    }
}
