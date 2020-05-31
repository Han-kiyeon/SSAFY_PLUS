package com.ssafy.springboot.domain.portfolio;

import com.ssafy.springboot.domain.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    @Query("SELECT p FROM Portfolio p WHERE p.user.user_id = :user_id")
    List<Portfolio> findByUser(@Param("user_id") Long user_id);
}
