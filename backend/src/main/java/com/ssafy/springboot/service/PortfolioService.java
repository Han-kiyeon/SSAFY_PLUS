package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.PortfolioRepository;
import com.ssafy.springboot.domain.project.ProjectRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.board.BoardListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioUpdateRequestDto;
import com.ssafy.springboot.web.dto.project.ProjectListResponseDto;
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
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public List<PortfolioListResponseDto> findAll() {
        List<PortfolioListResponseDto> ret = portfolioRepository.findAll()
                .stream()
                .map(PortfolioListResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < ret.size(); i++) {
            ret.get(i).setProject(
                    projectRepository.findAllByPortfolioId(ret.get(i).getPortfolio_id())
                            .stream()
                            .map(ProjectListResponseDto::new)
                            .collect(Collectors.toList())
            );
        }

        return ret;
    }


    @Transactional(readOnly = true)
    public PortfolioListResponseDto findById(Long id) {
        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        PortfolioListResponseDto ret = new PortfolioListResponseDto(entity);

        ret.setProject(
                projectRepository.findAllByPortfolioId(ret.getPortfolio_id())
                        .stream()
                        .map(ProjectListResponseDto::new)
                        .collect(Collectors.toList())
        );

        return ret;
    }

    @Transactional
    public ResponseEntity<?> save(PortfolioSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        portfolioRepository.save(requestDto.toEntity(user));
        return ResponseEntity.
                status(HttpStatus.OK).
                body("dd");
    }

    @Transactional
    public Long update(Long id, PortfolioUpdateRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return Long.valueOf(-1);

        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("없습니다. id=" + id));

        entity.update(requestDto.getName(), requestDto.getBirth(), requestDto.getEmail(),
                requestDto.getPhone(), requestDto.getCharacters(), requestDto.getSkills());


        return id;
    }

    @Transactional
    public void delete(Long id) {
        Portfolio entity = portfolioRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        portfolioRepository.delete(entity);
    }


    @Transactional
    public List<PortfolioListResponseDto> findByUser(String email) {
        User user = userRepository.findByEmail(email);

        List<PortfolioListResponseDto> ret = portfolioRepository.findByUser(user.getUser_id())
                .stream()
                .map(PortfolioListResponseDto::new)
                .collect(Collectors.toList());

        for (int i = 0; i < ret.size(); i++) {
            ret.get(i).setProject(
                    projectRepository.findAllByPortfolioId(ret.get(i).getPortfolio_id())
                            .stream()
                            .map(ProjectListResponseDto::new)
                            .collect(Collectors.toList())
            );
        }

        return ret;
    }


}
