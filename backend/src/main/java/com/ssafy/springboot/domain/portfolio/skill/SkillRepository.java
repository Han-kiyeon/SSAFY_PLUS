package com.ssafy.springboot.domain.portfolio.skill;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SkillRepository extends JpaRepository<Skill, Long> {

    @Query("SELECT s FROM Skill s WHERE s.portfolio.portfolio_id = :portfolio_id")
    List<Skill> findAllByPortfolioId(@Param("portfolio_id") Long portfolio_id);

}
