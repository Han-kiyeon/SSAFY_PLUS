package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerLikeRepository extends JpaRepository<AnswerLike, Long> {

    @Query("SELECT a FROM AnswerLike a WHERE a.answer_like.answer_id=:answer_id AND a.user_like.user_id=:user_id")
    AnswerLike findByAnswerIDAndUserID(@Param("answer_id") Long answer_id, @Param("user_id") Long user_id);



}
