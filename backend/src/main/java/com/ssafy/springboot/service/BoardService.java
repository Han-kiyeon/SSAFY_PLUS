package com.ssafy.springboot.service;


import com.ssafy.springboot.domain.board.*;
import com.ssafy.springboot.web.dto.board.*;
import com.ssafy.springboot.domain.user.*;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<BoardListResponseDto> selectAll() {
        return boardRepository.findAllDesc()
                .stream()
                .map(BoardListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public ResponseEntity<?> save(BoardSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getManager_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        return ResponseEntity.status(HttpStatus.OK).body(boardRepository.save(requestDto.toEntity(user)).getBoard_id());
    }

    @Transactional
    public ResponseEntity<?> update(Long id, BoardUpdateRequestDto requestDto) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시판 없습니다. id=" + id));
        //User user, String title, String contents, String topic, String type, String password
        User user = userRepository.findByEmail(requestDto.getManager_email());
        board.update(user, requestDto.getTitle(),
                requestDto.getContents(), requestDto.getTopic(), requestDto.getType(), requestDto.getPassword());

        return ResponseEntity.status(HttpStatus.OK).body(id);
    }

    @Transactional
    public void delete(Long id) {
        Board posts = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시판 없습니다. id=" + id));

        boardRepository.delete(posts);
    }

    @Transactional(readOnly = true)
    public List<BoardListResponseDto> findByType(String type) {
        return boardRepository.findByType(type)
                .stream()
                .map(BoardListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<BoardListResponseDto> findByUser(String email) {
        User user = userRepository.findByEmail(email);

        System.out.println(boardRepository.findByUser(user.getUser_id())
                .stream()
                .map(BoardListResponseDto::new)
                .collect(Collectors.toList()));


        return boardRepository.findByUser(user.getUser_id())
                .stream()
                .map(BoardListResponseDto::new)
                .collect(Collectors.toList());
    }
}
