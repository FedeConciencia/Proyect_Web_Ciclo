package com.proyecto.ciclo.repositories;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.proyecto.ciclo.entities.FormCommunity;

public interface FormCommunityRepository extends BaseRepository<FormCommunity, Long> {
  // Add any additional custom methods specific to FormCommunityRepository

  // Return all the FormCommunity created in specific Date
  @Query("SELECT fp FROM FormCommunity fp WHERE DATE(fp.createdAt) = DATE(:createdAt)")
  List<FormCommunity> findByCreatedAt(@Param("createdAt") OffsetDateTime createdAt);

  @Query("SELECT fp FROM FormCommunity fp WHERE DATE(fp.createdAt) BETWEEN DATE(:startDate) AND DATE(:endDate)")
  List<FormCommunity> findByCreatedAtRange(@Param("startDate") OffsetDateTime startDate, @Param("endDate") OffsetDateTime endDate);
}
