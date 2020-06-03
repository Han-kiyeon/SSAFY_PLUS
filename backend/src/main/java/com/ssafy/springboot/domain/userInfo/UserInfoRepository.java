package com.ssafy.springboot.domain.userInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    @Query("SELECT u FROM UserInfo u WHERE u.user.user_id = :user_id")
    UserInfo findByUserID(@Param("user_id") Long user_id);

}
