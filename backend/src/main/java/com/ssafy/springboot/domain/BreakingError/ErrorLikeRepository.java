package com.ssafy.springboot.domain.BreakingError;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ErrorLikeRepository extends JpaRepository<ErrorLike, Long> {

    @Query("SELECT e FROM ErrorLike e WHERE e.error_like.error_id=:error_id AND e.user_like.user_id=:user_id")
    ErrorLike findByErrorIDAndUserID(@Param("error_id") Long error_id, @Param("user_id") Long user_id);


}
