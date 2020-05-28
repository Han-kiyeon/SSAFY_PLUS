package com.ssafy.springboot.service;


import com.ssafy.springboot.domain.portfolio.ProjectRepository;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.portfolio.ProjectSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class ProtfolioService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

//    @Transactional(readOnly = true)
//    public List<ProjectListResponseDto> selectAll() {
//        return projectRepository.findAll().stream()
//                .map(ProjectListResponseDto::new) //.map(posts -> new PostsListResponseDto(post))
//                .collect(Collectors.toList());
//    }

    @Transactional
    public ResponseEntity<?> save(ProjectSaveRequestDto requestDto) {
//        User user = userRepository.findByEmail(requestDto.getManager_email());
//        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        return ResponseEntity.status(HttpStatus.OK).body("!!");
    }
//
//    @Transactional
//    public ResponseEntity<?> update(Long id, BoardUpdateRequestDto requestDto) {
//        Board board = projectRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시판 없습니다. id=" + id));
//        //User user, String title, String contents, String topic, String type, String password
//        User user = userRepository.findByEmail(requestDto.getManager_email());
//        board.update(user, requestDto.getTitle(),
//                requestDto.getContents(), requestDto.getTopic(), requestDto.getType(), requestDto.getPassword());
//
//        return ResponseEntity.status(HttpStatus.OK).body(id);
//    }
//
//    @Transactional
//    public void delete(Long id) {
//        Board posts = projectRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시판 없습니다. id=" + id));
//
//        projectRepository.delete(posts);
//    }

}
