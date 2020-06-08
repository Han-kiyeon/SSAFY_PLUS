package com.ssafy.springboot.domain.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query("SELECT b FROM Board b ORDER BY b.board_id DESC")
    List<Board> findAllDesc();

    @Query("SELECT b FROM Board b WHERE b.board_id = :board_id")
    Board findByBoard_id(@Param("board_id") Long board_id);

    @Modifying
    @Query("UPDATE Board b SET b.post_cnt = b.post_cnt + 1 WHERE b.board_id = :board_id")
    Integer postCntUp(@Param("board_id") Long board_id);

    @Modifying
    @Query("UPDATE Board b SET b.post_cnt = b.post_cnt - 1 WHERE b.board_id = :board_id")
    Integer postCntDown(@Param("board_id") Long board_id);

    @Query("SELECT b FROM Board b WHERE b.type = :type")
    List<Board> findByType(@Param("type") String type);

    @Query("SELECT b FROM Board b WHERE b.board_id IN (SELECT bp.board.board_id FROM BoardParty bp WHERE bp.user.user_id=:user_id)")
    List<Board> findByUser(@Param("user_id") Long user_id);

    @Query("SELECT b FROM Board b WHERE b.board_id IN (SELECT bp.board.board_id FROM BoardParty bp GROUP BY bp.board.board_id ORDER BY COUNT(bp))")
    List<Board> top10();

    @Query("SELECT b FROM Board b ORDER BY b.post_cnt DESC")
    List<Board> postCntTop10();
}