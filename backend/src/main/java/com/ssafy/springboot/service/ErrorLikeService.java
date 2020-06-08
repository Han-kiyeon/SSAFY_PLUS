package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.ErrorLike;
import com.ssafy.springboot.domain.BreakingError.ErrorLikeRepository;
import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.BreakingError.ErrorsRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.BreakingError.ErrorLikeSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorLikeUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class ErrorLikeService {

    private final ErrorLikeRepository errorLikeRepository;
    private final UserRepository userRepository;
    private final ErrorsRepository errorsRepository;

    @Transactional
    public ResponseEntity<?> update(ErrorLikeUpdateRequestDto requestDto) {

        Errors error = errorsRepository.findById(requestDto.getError_id())
                .orElseThrow(() -> new IllegalArgumentException("해당 질문이 없습니다. id=" + requestDto.getError_id()));
        //유저 있나 확인
        User user = userRepository.findByEmail(requestDto.getUser_email());
        System.out.println(error.getError_id() + " " + user.getUser_id());

        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        ErrorLike errorLike = errorLikeRepository.findByErrorIDAndUserID(error.getError_id(), user.getUser_id());
        if (errorLike == null) {
            //안눌렀으면 디비에 저장....
            ErrorLikeSaveRequestDto dto = new ErrorLikeSaveRequestDto(user.getEmail(), error.getError_id());
            errorLikeRepository.save(dto.toEntity(user, error));
            errorsRepository.likeCntUp(error.getError_id());
            return ResponseEntity.status(HttpStatus.OK).body("like");
        } else {
            errorLikeRepository.delete(errorLike);
            errorsRepository.likeCntDown(error.getError_id());
            return ResponseEntity.status(HttpStatus.OK).body("unlike");
        }
    }
}
