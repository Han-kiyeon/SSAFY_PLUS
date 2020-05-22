package com.ssafy.springboot.domain.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query("SELECT b FROM Board b ORDER BY b.board_id DESC")
    List<Board> findAllDesc();

    @Query("SELECT b FROM Board b WHERE b.board_id = :board_id")
    Board findByBoard_id(@Param("board_id") Long board_id);

}