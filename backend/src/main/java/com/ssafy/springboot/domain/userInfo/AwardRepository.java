package com.ssafy.springboot.domain.userInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AwardRepository extends JpaRepository<Award, Long> {

    @Query("SELECT a FROM Award a WHERE a.userInfo.user_info_id = :user_info_id")
    List<Award> findAllByUserInfoId(@Param("user_info_id") Long user_info_id);

}
