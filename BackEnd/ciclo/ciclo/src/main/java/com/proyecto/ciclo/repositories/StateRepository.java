package com.proyecto.ciclo.repositories;

import org.springframework.stereotype.Repository;
import com.proyecto.ciclo.entities.StateEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;
import java.util.List;

@Repository
public interface StateRepository extends BaseRepository<StateEntity, Long> {

  @Query("SELECT s FROM StateEntity s LEFT JOIN FETCH s.cities WHERE s.id = :stateId")
  Optional<StateEntity> findByIdWithCities(@Param("stateId") Long stateId);

  @Query("SELECT DISTINCT s FROM StateEntity s LEFT JOIN FETCH s.cities")
  List<StateEntity> findAllWithCities();

}
