package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.board.BoardParty;
import com.ssafy.springboot.domain.board.BoardPartyRepository;
import com.ssafy.springboot.domain.board.BoardRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.board.BoardPartySaveRequestDto;
import com.ssafy.springboot.web.dto.post.PostLikeUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class BoardPartyService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final BoardPartyRepository boardPartyRepository;

    @Transactional
    public ResponseEntity<?> update(Long board_id, BoardPartySaveRequestDto requestDto) {
        System.out.println("Hello " + board_id + " " + requestDto.getUser_email());
        Board board = boardRepository.findById(board_id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시판이 없습니다. id=" + board_id));

        User user = userRepository.findByEmail(requestDto.getUser_email());

        if (user.getUser_id() == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        System.out.println(board.getBoard_id() + " " + user.getUser_id());
        BoardParty boardParty = boardPartyRepository.findByPostIDAndUserID(board_id, user.getUser_id());
        System.out.println(board.getPassword());
        if (board.getPassword() != null) {
            if (boardParty == null) {
                System.out.println("가입 안되있음");
                if (board.getPassword().equals(requestDto.getBoard_password())) {
                    boardPartyRepository.save(requestDto.toEntity(user, board));
                    System.out.println("가입 완료~");
                }else{
                    System.out.println("가입실패");
                }
            } else {
                System.out.println("가입 되있음");
            }
        } else {
            System.out.println("비밀게시판이 아니네");
        }

        return null;
    }
}
