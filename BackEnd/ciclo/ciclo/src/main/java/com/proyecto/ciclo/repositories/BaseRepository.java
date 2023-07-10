package com.proyecto.ciclo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import java.util.List;
import java.time.OffsetDateTime;

@NoRepositoryBean
@SuppressWarnings("hiding")
public interface BaseRepository<T, Long> extends JpaRepository<T, Long> {
    List<T> findAllByDeletedAtIsNull();

    List<T> findByCreatedAtAfter(OffsetDateTime filterDate);
}