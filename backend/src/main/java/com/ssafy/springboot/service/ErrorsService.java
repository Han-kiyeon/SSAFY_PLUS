package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.BreakingError.ErrorsRepository;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class ErrorsService {
    private final ErrorsRepository errorsRepository;

    @Transactional
    public Long save(ErrorsSaveRequestDto requestDto) {
        return errorsRepository.save(requestDto.toEntity()).getErrorId();
    }

    @Transactional
    public Long update(Long id, ErrorsUpdateRequestDto requestDto) {
        Errors posts = errorsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        posts.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    public ErrorsResponseDto findById(Long id) {
        Errors entity = errorsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        return new ErrorsResponseDto(entity);
    }


}
