package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.project.Project;
import com.ssafy.springboot.domain.project.ProjectRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.project.ProjectListResponseDto;
import com.ssafy.springboot.web.dto.project.ProjectSaveRequestDto;
import com.ssafy.springboot.web.dto.project.ProjectUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class ProjectService {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public List<ProjectListResponseDto> findAll() {
        return projectRepository.findAll().stream()
                .map(ProjectListResponseDto::new) //.map(posts -> new PostsListResponseDto(post))
                .collect(Collectors.toList());
    }


    @Transactional(readOnly = true)
    public ProjectListResponseDto findById(Long id) {
        Project entity = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        return new ProjectListResponseDto(entity);
    }

    @Transactional
    public ResponseEntity<?> save(ProjectSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        System.out.println(requestDto.toString());
        projectRepository.save(requestDto.toEntity());
        System.out.println("?");
        return ResponseEntity.
                status(HttpStatus.OK).
                body("dd");
    }

    @Transactional
    public Long update(Long id, ProjectUpdateRequestDto requestDto) {
        System.out.println(requestDto.toString());
        Project entity = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        entity.update(requestDto.getName(), requestDto.getPeriod(), requestDto.getDescription()
                , requestDto.getStacks(), requestDto.getRoles(), requestDto.getUrl());

        return id;
    }

    @Transactional
    public void delete(Long id) {
        Project entity = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        projectRepository.delete(entity);
    }

}
