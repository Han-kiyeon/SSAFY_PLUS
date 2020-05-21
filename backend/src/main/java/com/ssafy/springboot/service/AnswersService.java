package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.Answers;
import com.ssafy.springboot.domain.BreakingError.AnswersRepository;
import com.ssafy.springboot.web.dto.BreakingError.AnswersResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AnswersService {
    private final AnswersRepository answersRepository;

    @Transactional
    public Long save(AnswersSaveRequestDto requestDto) {
        return answersRepository.save(requestDto.toEntity()).getAnswerId();
    }

    @Transactional
    public Long update(Long id, AnswersUpdateRequestDto requestDto) {
        Answers answers = answersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        answers.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    public AnswersResponseDto findById(Long id) {
        Answers entity = answersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        return new AnswersResponseDto(entity);
    }
}
