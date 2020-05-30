package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.board.*;
import com.ssafy.springboot.domain.user.*;
import com.ssafy.springboot.web.dto.board.*;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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
        if (board.getType().equals("private")) {
            if (boardParty == null) {
                System.out.println("가입 안되있음");
                System.out.println(board.getPassword() + " " + requestDto.getBoard_password());
                if (board.getPassword().equals(requestDto.getBoard_password())) {
                    boardPartyRepository.save(requestDto.toEntity(user, board));
                    System.out.println("가입 완료~");
                    return ResponseEntity.status(HttpStatus.OK).body("가입완료");
                } else {
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
