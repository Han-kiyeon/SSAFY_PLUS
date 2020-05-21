package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.board.BoardRepository;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.post.PostsRepository;

import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;

import com.ssafy.springboot.web.dto.post.PostsSaveRequestDto;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@RequiredArgsConstructor
@Service
public class PostsService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;

    @Transactional
    public ResponseEntity<?> save(PostsSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        System.out.println(requestDto.getBoard_id());
        Optional<Board> board = boardRepository.findById(requestDto.getBoard_id());
        if (board == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("게시판 없음?!");

        return ResponseEntity.
                status(HttpStatus.OK).
                body(postsRepository.save(requestDto.toEntity(user, board)).getId());
    }

    @Transactional(readOnly = true)
    public Posts findById(Long id) {
        Posts entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        return entity;
    }

//
//    @Transactional
//    public Long update(Long id, PostsUpdateRequestDto requestDto) {
//        Posts posts = postsRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//
//        posts.update(requestDto.getTitle(), requestDto.getContent());
//
//        return id;
//    }
//
//    @Transactional
//    public void delete(Long id) {
//        Posts posts = postsRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//
//        postsRepository.delete(posts);
//    }
//
//
//    @Transactional(readOnly = true)
//    public List<PostsListResponseDto> findAllDesc() {
//        return postsRepository.findAllDesc().stream()
//                .map(PostsListResponseDto::new) //.map(posts -> new PostsListResponseDto(post))
//                .collect(Collectors.toList());
//    }
}
