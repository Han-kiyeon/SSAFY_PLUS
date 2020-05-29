package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ErrorsRepository extends JpaRepository<Errors, Long>{

    @Query("SELECT e FROM Errors e ORDER BY e.errorId DESC")
    List<Errors> findAllDesc();

    @Query("SELECT e FROM Errors e WHERE e.errorId = :error_id")
    Errors findByErrorId(@Param("error_id") Long errorId);

    @Modifying
    @Query("UPDATE Errors e SET e.answerCnt = e.answerCnt+1 WHERE e.errorId = :error_id")
    Integer answerCntUp(@Param("error_id") Long errorId);

    @Modifying
    @Query("UPDATE Errors e SET e.answerCnt = e.answerCnt-1 WHERE e.errorId = :error_id")
    Integer answerCntDown(@Param("error_id") Long errorId);

    @Modifying
    @Query("UPDATE Errors e SET e.likeCnt = e.likeCnt+1 WHERE e.errorId = :error_id")
    Integer likeCntUp(@Param("error_id") Long errorId);

    @Modifying
    @Query("UPDATE Errors e SET e.likeCnt = e.likeCnt-1 WHERE e.errorId = :error_id")
    Integer likeCntDown(@Param("error_id") Long errorId);

}
