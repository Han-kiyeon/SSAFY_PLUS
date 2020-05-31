package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Arrays;
import java.util.List;

public interface ErrorsRepository extends JpaRepository<Errors, Long>{

    @Query("SELECT e FROM Errors e ORDER BY e.error_id DESC")
    List<Errors> findAllDesc();

    @Query("SELECT e FROM Errors e WHERE e.error_id = :error_id")
    Errors findByErrorId(@Param("error_id") Long error_id);

    @Modifying
    @Query("UPDATE Errors e SET e.answer_cnt = e.answer_cnt+1 WHERE e.error_id = :error_id")
    Integer answerCntUp(@Param("error_id") Long error_id);

    @Modifying
    @Query("UPDATE Errors e SET e.answer_cnt = e.answer_cnt-:count WHERE e.error_id = :error_id")
    Integer answerCntDown(@Param("error_id") Long error_id, @Param("count") Long count);

    @Modifying
    @Query("UPDATE Errors e SET e.like_cnt = e.like_cnt+1 WHERE e.error_id = :error_id")
    Integer likeCntUp(@Param("error_id") Long error_id);

    @Modifying
    @Query("UPDATE Errors e SET e.like_cnt = e.like_cnt-1 WHERE e.error_id = :error_id")
    Integer likeCntDown(@Param("error_id") Long error_id);

    @Query("SELECT e FROM Errors e WHERE e.title like :keyword ORDER BY e.error_id DESC")
    List<Errors> seachErrorByTitle(@Param("keyword") String keyword);
}
