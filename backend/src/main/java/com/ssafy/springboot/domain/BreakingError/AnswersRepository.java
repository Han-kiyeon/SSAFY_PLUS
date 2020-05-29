package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswersRepository extends JpaRepository<Answers, Long> {

    @Query("SELECT a FROM Answers a WHERE a.error = :error_id ORDER BY a.answerId DESC")
    List<Answers> findAllDesc(@Param("error_id") Long errorId);

    @Query("SELECT a FROM Answers a WHERE a.answerId = :answer_id")
    Answers findByAnswerId(@Param("answer_id") Long answerId);

    @Modifying
    @Query("UPDATE Answers a SET a.answerCnt = a.answerCnt+1 WHERE a.answerId = :answer_id")
    Integer answerCntUp(@Param("answer_id") Long answerId);

    @Modifying
    @Query("UPDATE Answers a SET a.answerCnt = a.answerCnt-1 WHERE a.answerId = :answer_id")
    Integer answerCntDown(@Param("answer_id") Long answerId);

    @Modifying
    @Query("UPDATE Answers a SET a.likeCnt = a.likeCnt+1 WHERE a.answerId = :answer_id")
    Integer likeCntUp(@Param("answer_id") Long answerId);

    @Modifying
    @Query("UPDATE Answers a SET a.likeCnt = a.likeCnt-1 WHERE a.answerId = :answer_id")
    Integer likeCntDown(@Param("answer_id") Long answerId);
}
