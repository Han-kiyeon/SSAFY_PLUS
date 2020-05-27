package com.ssafy.springboot.domain.board;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface BoardPartyRepository extends JpaRepository<BoardParty, Long> {

    @Query("SELECT b FROM BoardParty b WHERE b.board.board_id=:board_id AND b.user.user_id=:user_id")
    BoardParty findByPostIDAndUserID(@Param("board_id") Long board_id, @Param("user_id") Long user_id);
}
