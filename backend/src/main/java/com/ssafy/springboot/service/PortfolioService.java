package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.PortfolioRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.portfolio.PortfolioListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class PortfolioService {

    private final UserRepository userRepository;
    private final PortfolioRepository portfolioRepository;

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
        User user = userRepository.findByEmail(requestDto.getEmail());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        System.out.println(requestDto.toString());
        portfolioRepository.save(requestDto.toEntity(user));
        System.out.println("?");
        return ResponseEntity.
                status(HttpStatus.OK).
                body("dd");
    }
//
//    @Transactional
//    public Long update(Long id, ProjectUpdateRequestDto requestDto) {
//        System.out.println(requestDto.toString());
//        Project entity = projectRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//
//        entity.update(requestDto.getName(), requestDto.getPeriod(), requestDto.getDescription()
//                , requestDto.getStacks(), requestDto.getRoles(), requestDto.getUrl());
//
//        return id;
//    }
//
//    @Transactional
//    public void delete(Long id) {
//        Project entity = projectRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//
//        projectRepository.delete(entity);
//    }

}
