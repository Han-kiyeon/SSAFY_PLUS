package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.PortfolioRepository;
import com.ssafy.springboot.domain.portfolio.project.ProjectRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.portfolio.PortfolioListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.sound.sampled.Port;
import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class PortfolioService {

    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public List<PortfolioListResponseDto> findAll() {
        return portfolioRepository.findAll().stream()
                .map(PortfolioListResponseDto::new)
                .collect(Collectors.toList());
    }


    @Transactional(readOnly = true)
    public PortfolioListResponseDto findById(Long id) {
        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        return new PortfolioListResponseDto(entity);
    }

    @Transactional
    public ResponseEntity<?> save(PortfolioSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        System.out.println(requestDto.toString());
        portfolioRepository.save(requestDto.toEntity(user));
        System.out.println("?");
        return ResponseEntity.
                status(HttpStatus.OK).
                body("dd");
    }

    @Transactional
    public Long update(Long id, PortfolioUpdateRequestDto requestDto) {
        System.out.println(requestDto.toString());
        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        entity.update(requestDto.getName(), requestDto.getBirth(), requestDto.getEmail(),
                requestDto.getPhone(), requestDto.getCharacters(), requestDto.getSkills(), requestDto.getProjects());


        return id;
    }

    @Transactional
    public void delete(Long id) {
        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        portfolioRepository.delete(entity);
    }

}
