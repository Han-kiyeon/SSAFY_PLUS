package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswersRepository extends JpaRepository<Answers, Long> {

    @Query("SELECT a FROM Answers a WHERE a.parent = 0 ORDER BY a.answer_id DESC")
    List<Answers> findAllDesc();//이렇게 따로 조회하는게 좋은지 그냥 다 보여주고 프론트에서 구분하는게 좋은지 물어보고 결정

    @Query("SELECT a FROM Answers a WHERE a.parent= :parent ORDER BY a.answer_id DESC")
    List<Answers> findNextAnswerDesc(@Param("parent") Long parent);

    @Query("SELECT a FROM Answers a WHERE a.answer_id = :answer_id")
    Answers findByAnswerId(@Param("answer_id") Long answer_id);

    @Modifying
    @Query("UPDATE Answers a SET a.answer_cnt = a.answer_cnt+1 WHERE a.answer_id = :answer_id")
    Integer answerCntUp(@Param("answer_id") Long answer_id);

    @Modifying
    @Query("UPDATE Answers a SET a.answer_cnt = a.answer_cnt-:count WHERE a.answer_id = :answer_id")
    Integer answerCntDown(@Param("answer_id") Long answer_id,@Param("count") Long count);

    @Modifying
    @Query("UPDATE Answers a SET a.like_cnt = a.like_cnt+1 WHERE a.answer_id = :answer_id")
    Integer likeCntUp(@Param("answer_id") Long answer_id);

    @Modifying
    @Query("UPDATE Answers a SET a.like_cnt = a.like_cnt-1 WHERE a.answer_id = :answer_id")
    Integer likeCntDown(@Param("answer_id") Long answer_id);
}
