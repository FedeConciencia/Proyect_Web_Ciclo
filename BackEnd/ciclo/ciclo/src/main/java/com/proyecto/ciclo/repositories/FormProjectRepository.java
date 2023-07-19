package com.proyecto.ciclo.repositories;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.proyecto.ciclo.entities.FormProject;

public interface FormProjectRepository extends BaseRepository<FormProject, Long> {
	// Add any additional custom methods specific to FormProjectRepository

	// Return all the FormProject created in specific Date
	@Query("SELECT fp FROM FormProject fp WHERE DATE(fp.createdAt) = DATE(:createdAt)")
	List<FormProject> findByCreatedAt(@Param("createdAt") OffsetDateTime createdAt);

	@Query("SELECT fp FROM FormProject fp WHERE DATE(fp.createdAt) BETWEEN DATE(:startDate) AND DATE(:endDate)")
	List<FormProject> findByCreatedAtRange(@Param("startDate") OffsetDateTime startDate,
			@Param("endDate") OffsetDateTime endDate);

	boolean existsByEmail(String email);
}
