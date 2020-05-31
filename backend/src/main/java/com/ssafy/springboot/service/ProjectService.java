package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.PortfolioRepository;
import com.ssafy.springboot.domain.project.Project;
import com.ssafy.springboot.domain.project.ProjectRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.project.*;
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
    private final PortfolioRepository portfolioRepository;

    @Transactional(readOnly = true)
    public List<ProjectListResponseDto> findAll(Long id) {
        Portfolio portfolio = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 포트폴리오는 없습니다. id=" + id));

        return projectRepository.findAllByPortfolioId(id).stream()
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

        Portfolio portfolio = portfolioRepository.findById(requestDto.getPortfolio_id())
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + requestDto.getPortfolio_id()));

        projectRepository.save(requestDto.toEntity(portfolio));
        return ResponseEntity.
                status(HttpStatus.OK).
                body("OK");
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
