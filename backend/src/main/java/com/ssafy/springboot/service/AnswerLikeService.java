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

        Answers answer = answersRepository.findById(requestDto.getAnswer_id())
                .orElseThrow(() -> new IllegalArgumentException("해당 답변이 없습니다. id=" + requestDto.getAnswer_id()));
        //유저 있나 확인
        User user = userRepository.findByEmail(requestDto.getUser_email());
        System.out.println(answer.getAnswer_id() + " " + user.getUser_id());

        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        AnswerLike answerLike = answerLikeRepository.findByAnswerIDAndUserID(answer.getAnswer_id(), user.getUser_id());
        if (answerLike == null) {
            //안눌렀으면 디비에 저장....
            AnswerLikeSaveRequestDto dto = new AnswerLikeSaveRequestDto(user.getEmail(), answer.getAnswer_id());
            answerLikeRepository.save(dto.toEntity(user, answer));
            answersRepository.likeCntUp(answer.getAnswer_id());
            userRepository.answerLikeUp(answer.getUser().getUser_id());
            return ResponseEntity.status(HttpStatus.OK).body("like");
        } else {
            answerLikeRepository.delete(answerLike);
            answersRepository.likeCntDown(answer.getAnswer_id());
            userRepository.answerLikeDown(answer.getUser().getUser_id());
            return ResponseEntity.status(HttpStatus.OK).body("unlike");
        }
    }
}
