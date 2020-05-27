package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ErrorsRepository extends JpaRepository<Errors, Long>{

    @Query("SELECT e FROM Errors e ORDER BY e.errorId DESC")
    List<Errors> findAllDesc();

    @Query("SELECT e FROM Errors e WHERE e.errorId = :error_id")
    Errors findByErrorId(@Param("error_id") Long error_id);
}
