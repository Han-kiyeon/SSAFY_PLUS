package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnswersRepository extends JpaRepository<Answers, Long> {

    @Query("SELECT a FROM Answers a ORDER BY a.answerId DESC")
    List<Answers> findAllDesc();
}
