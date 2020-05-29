package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.BreakingError.AnswerLike;
import com.ssafy.springboot.domain.BreakingError.AnswerLikeRepository;
import com.ssafy.springboot.domain.BreakingError.Answers;
import com.ssafy.springboot.domain.BreakingError.AnswersRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.BreakingError.AnswerLikeSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswerLikeUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class AnswerLikeService {

    private final AnswerLikeRepository answerLikeRepository;
    private final UserRepository userRepository;
    private final AnswersRepository answersRepository;

    @Transactional
    public ResponseEntity<?> update(AnswerLikeUpdateRequestDto requestDto) {

        Answers answer = answersRepository.findById(requestDto.getAnswerId())
                .orElseThrow(() -> new IllegalArgumentException("해당 답변이 없습니다. id=" + requestDto.getAnswerId()));
        //유저 있나 확인
        User user = userRepository.findByEmail(requestDto.getUserEmail());
        System.out.println(answer.getAnswerId() + " " + user.getUser_id());

        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        AnswerLike answerLike = answerLikeRepository.findByAnswerIDAndUserID(answer.getAnswerId(), user.getUser_id());
        if (answerLike == null) {
            //안눌렀으면 디비에 저장....
            AnswerLikeSaveRequestDto dto = new AnswerLikeSaveRequestDto(user.getEmail(), answer.getAnswerId());
            answerLikeRepository.save(dto.toEntity(user, answer));
            answersRepository.likeCntUp(answer.getAnswerId());
            return ResponseEntity.status(HttpStatus.OK).body("like");
        } else {
            answerLikeRepository.delete(answerLike);
            answersRepository.likeCntDown(answer.getAnswerId());
            return ResponseEntity.status(HttpStatus.OK).body("unlike");
        }
    }
}
