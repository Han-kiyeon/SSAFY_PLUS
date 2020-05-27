package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.Answers;
import com.ssafy.springboot.domain.BreakingError.AnswersRepository;
import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.BreakingError.ErrorsRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.BreakingError.AnswersListResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AnswersService {
    private final UserRepository userRepository;
    private final ErrorsRepository errorsRepository;
    private final AnswersRepository answersRepository;

    @Transactional
    public ResponseEntity<?> save(AnswersSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUserEmail());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        System.out.println(requestDto.getErrorId());
        Errors error = errorsRepository.findByErrorId(requestDto.getErrorId());
        System.out.println(error);
        if (error == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("질문 없음?!");
        return ResponseEntity.
                status(HttpStatus.OK).
                body(answersRepository.save(requestDto.toEntity(user, error)).getAnswerId());
    }

    @Transactional(readOnly = true)
    public AnswersResponseDto findById(Long id) {
        Answers entity = answersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 답변이 없습니다. id=" + id));

        return new AnswersResponseDto(entity);
    }

    @Transactional
    public Long update(Long id, AnswersUpdateRequestDto requestDto) {
        Answers answers = answersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));

        answers.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    @Transactional
    public void delete(Long id) {
        Answers answers = answersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 답변이 없습니다. id=" + id));

        answersRepository.delete(answers);
    }


    @Transactional(readOnly = true)
    public List<AnswersListResponseDto> findAllDesc() {
        return answersRepository.findAllDesc().stream()
                .map(AnswersListResponseDto::new) //.map(posts -> new PostsListResponseDto(post))
                .collect(Collectors.toList());
    }
}
