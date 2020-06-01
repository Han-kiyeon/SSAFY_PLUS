package com.ssafy.springboot.domain.portfolio.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query("SELECT p FROM Project p WHERE p.portfolio.portfolio_id = :portfolio_id")
    List<Project> findAllByPortfolioId(@Param("portfolio_id") Long portfolio_id);

}
