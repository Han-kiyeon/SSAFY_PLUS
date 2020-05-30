package com.ssafy.springboot.domain.board;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface BoardPartyRepository extends JpaRepository<BoardParty, Long> {

    @Query("SELECT bp FROM BoardParty bp WHERE bp.board.board_id=:board_id AND bp.user.user_id=:user_id")
    BoardParty findByPostIDAndUserID(@Param("board_id") Long board_id, @Param("user_id") Long user_id);

}
