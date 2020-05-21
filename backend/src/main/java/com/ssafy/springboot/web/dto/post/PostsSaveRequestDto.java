package com.ssafy.springboot.web.dto.post;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {

    private String user_email;
    private Long board_id;
    private String title;
    private String content;
//    private Long like_cnt;
//    private Long comment_cnt;

    @Builder
    public PostsSaveRequestDto(String user_email, Long board_id, String title, String content) {
        this.user_email = user_email;
        this.board_id = board_id;
        this.title = title;
        this.content = content;
    }

//    @Builder
//    public PostsSaveRequestDto(String user_email, Long board_id,
//                               String title, String content, Long like_cnt, Long comment_cnt) {
//        this.user_email = user_email;
//        this.board_id = board_id;
//        this.title = title;
//        this.content = content;
//        this.like_cnt = like_cnt;
//        this.comment_cnt = comment_cnt;
//    }

    public Posts toEntity(User user, Optional<Board> board) {
        return Posts.builder()
                .user(user)
                .board(board.get())
                .title(title)
                .content(content)
                .build();
    }
}
