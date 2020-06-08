package com.ssafy.springboot.domain.episode;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EpisodeRepository extends JpaRepository<Episode, Long> {

    @Query("SELECT e FROM Episode e ORDER BY e.episode_id DESC")
    List<Episode> findAllDesc();

    @Query("SELECT e FROM Episode e WHERE e.user.user_id = :user_id ORDER BY e.episode_id DESC")
    List<Episode> findByUser(@Param("user_id") Long user_id);



}