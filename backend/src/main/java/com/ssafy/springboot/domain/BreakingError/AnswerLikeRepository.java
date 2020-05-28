package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerLikeRepository extends JpaRepository<AnswerLike, Long> {

    @Query("SELECT a FROM AnswerLike a WHERE a.answerLike.answerId=:answer_id AND a.userLike.user_id=:user_id")
    AnswerLike findByAnswerIDAndUserID(@Param("answer_id") Long answerId, @Param("user_id") Long user_id);


}
