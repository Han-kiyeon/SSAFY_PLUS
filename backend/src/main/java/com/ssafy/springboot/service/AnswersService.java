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
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");
        System.out.println(requestDto.getError_id());
        Errors error = errorsRepository.findByErrorId(requestDto.getError_id());
        if(requestDto.getParent()!=0) {
            Answers parent = answersRepository.findByAnswerId(requestDto.getParent());
            answersRepository.answerCntUp(parent.getAnswer_id());
        }
        errorsRepository.answerCntUp(error.getError_id());
        System.out.println(error);
        if (error == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("질문 없음?!");
        return ResponseEntity.
                status(HttpStatus.OK).
                body(answersRepository.save(requestDto.toEntity(user, error)).getAnswer_id());
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
        Answers answer = answersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 답변이 없습니다. id=" + id));
        if (answer.getParent()!=0){
            answersRepository.answerCntDown(answer.getParent(), (long) 1);
        }else{
            List<Answers> list = answersRepository.findNextAnswerDesc(id);
            errorsRepository.answerCntDown(answer.getError().getError_id(), (long) list.size());
            for(Answers a: list ){
                answersRepository.delete(a);

            }
        }
        answersRepository.delete(answer);
        errorsRepository.answerCntDown(answer.getError().getError_id(), (long) 1);
    }


    @Transactional(readOnly = true)
    public List<AnswersListResponseDto> findFirstAnswer() {
        return answersRepository.findFirstAnswer().stream()
                .map(AnswersListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<AnswersListResponseDto> findNextAnswerDesc(Long parent) {
        return answersRepository.findNextAnswerDesc(parent).stream()
                .map(AnswersListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<AnswersListResponseDto> findErrorAnswer(Long parent) {
        return answersRepository.findErrorAnswer(parent).stream()
                .map(AnswersListResponseDto::new)
                .collect(Collectors.toList());
    }

}
