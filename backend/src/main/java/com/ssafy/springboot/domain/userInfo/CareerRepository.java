package com.ssafy.springboot.domain.userInfo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CareerRepository extends JpaRepository<Career, Long> {

    @Query("SELECT c FROM Career c WHERE c.userInfo.user_info_id = :user_info_id")
    List<Career> findAllByUserInfoId(@Param("user_info_id") Long user_info_id);

}
