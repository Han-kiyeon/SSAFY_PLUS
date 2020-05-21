package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.ErrorsRepository;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsSaveRequestDto;
import com.ssafy.springboot.web.dto.PostsSaveRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class BreakingErrorService {
    private final ErrorsRepository errorsRepository;

    @Transactional
    public Long save(ErrorsSaveRequestDto requestDto) {
        return errorsRepository.save(requestDto.toEntity()).getErrorId();
    }

}
