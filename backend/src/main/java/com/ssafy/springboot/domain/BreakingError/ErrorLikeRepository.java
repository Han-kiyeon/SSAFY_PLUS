package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ErrorLikeRepository extends JpaRepository<ErrorLike, Long> {

    @Query("SELECT e FROM ErrorLike e WHERE e.errorLike.errorId=:error_id AND e.userLike.user_id=:user_id")
    ErrorLike findByErrorIDAndUserID(@Param("error_id") Long errorId, @Param("user_id") Long user_id);


}
