package com.ssafy.springboot.web.dto.board;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.board.BoardParty;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardPartySaveRequestDto {

    private String user_email;
    private Long board_password;

    @Builder
    public BoardPartySaveRequestDto(String user_email, Long board_password) {
        this.user_email = user_email;
        this.board_password = board_password;
    }

    public BoardParty toEntity(User user, Board board) {
        return BoardParty.builder()
                .user(user)
                .board(board)
                .build();
    }
}
