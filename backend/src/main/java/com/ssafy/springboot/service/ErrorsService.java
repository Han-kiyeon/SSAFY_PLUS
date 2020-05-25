package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.BreakingError.ErrorsRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsListResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ErrorsService {
    private final ErrorsRepository errorsRepository;
    private final UserRepository userRepository;

    @Transactional
    public ResponseEntity<?> save(ErrorsSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUserEmail());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        return ResponseEntity.
                status(HttpStatus.OK).
                body(errorsRepository.save(requestDto.toEntity(user)).getErrorId());
    }

    @Transactional
    public Long update(Long id, ErrorsUpdateRequestDto requestDto) {
        Errors errors = errorsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 질문이 없습니다. id=" + id));

        errors.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    @Transactional(readOnly = true)
    public ErrorsResponseDto findById(Long id) {
        Errors entity = errorsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 질문이 없습니다. id=" + id));

        return new ErrorsResponseDto(entity);
    }

    @Transactional
    public void delete(Long id) {
        Errors errors = errorsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 질문이 없습니다. id=" + id));

        errorsRepository.delete(errors);
    }


    @Transactional(readOnly = true)
    public List<ErrorsListResponseDto> findAllDesc() {
        return errorsRepository.findAllDesc().stream()
                .map(ErrorsListResponseDto::new) //.map(posts -> new PostsListResponseDto(post))
                .collect(Collectors.toList());
    }

}
