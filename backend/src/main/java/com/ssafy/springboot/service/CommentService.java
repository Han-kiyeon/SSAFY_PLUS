package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.board.BoardRepository;
import com.ssafy.springboot.domain.comment.Comment;
import com.ssafy.springboot.domain.comment.CommentRepository;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.post.PostsRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.comment.CommentListResponseDto;
import com.ssafy.springboot.web.dto.comment.CommentSaveRequestDto;
import com.ssafy.springboot.web.dto.comment.CommentUpdateRequestDto;
import com.ssafy.springboot.web.dto.post.PostsSaveRequestDto;
import com.ssafy.springboot.web.dto.post.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;
    private final CommentRepository commentRepository;


    @Transactional(readOnly = true)
    public List<CommentListResponseDto> findAllDesc(Long id) {
        return commentRepository.findAllDesc(id).stream()
                .map(CommentListResponseDto::new)
                .collect(Collectors.toList());
    }


    @Transactional
    public ResponseEntity<?> save(CommentSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        Posts post = postsRepository.findByPost_id(requestDto.getPost_id());
        if (post == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("게시글 없음?!");
        Long ret = commentRepository.save(requestDto.toEntity(user, post)).getComment_id();
        postsRepository.commentCntUp(post.getPost_id());
        return ResponseEntity.
                status(HttpStatus.OK).
                body(ret);
    }

    @Transactional
    public Long update(Long id, CommentUpdateRequestDto requestDto) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 댓글이 없습니다. id=" + id));
        System.out.println(comment.getContent());
        System.out.println(id + " " + requestDto.getContent());
        comment.update(requestDto.getContent());

        return id;
    }

    @Transactional
    public void delete(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
        postsRepository.commentCntDown(comment.getPost().getPost_id());
        commentRepository.delete(comment);

    }
}
