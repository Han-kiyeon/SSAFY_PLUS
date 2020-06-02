package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.board.BoardRepository;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.post.PostsRepository;

import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;

import com.ssafy.springboot.web.dto.post.*;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class PostsService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;


    @Transactional
    public ResponseEntity<?> save(PostsSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User does not exist...  ");
        System.out.println(requestDto.getBoard_id());
        Board board = boardRepository.findByBoard_id(requestDto.getBoard_id());
        System.out.println(board);
        if (board == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Post does not exist...  ");
        return ResponseEntity.
                status(HttpStatus.OK).
                body(postsRepository.save(requestDto.toEntity(user, board)).getPost_id());
    }

    @Transactional(readOnly = true)
    public PostsResponseDto findById(Long id) {
        Posts entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist...  id=" + id));

        return new PostsResponseDto(entity);
    }

    @Transactional
    public Long update(Long id, PostsUpdateRequestDto requestDto) {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist...  id=" + id));

        posts.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    @Transactional
    public void delete(Long id) {
        Posts posts = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist...  id=" + id));

        postsRepository.delete(posts);
    }


    @Transactional(readOnly = true)
    public List<PostsListResponseDto> findAllDesc() {
        return postsRepository.findAllDesc()
                .stream()
                .map(PostsListResponseDto::new)
                .collect(Collectors.toList());
    }


    @Transactional(readOnly = true)
    public List<PostsListResponseDto> findByBoardID(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Board does not exist...  id=" + id));

        return postsRepository.findByBoardID(board.getBoard_id())
                .stream()
                .map(PostsListResponseDto::new)
                .collect(Collectors.toList());
    }
}
