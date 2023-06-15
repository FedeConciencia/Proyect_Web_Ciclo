package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.BaseEntity;
import com.proyecto.ciclo.repositories.BaseRepository;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

@Service
public abstract class BaseService<T extends BaseEntity> {
    protected final BaseRepository<T, Long> repository;

    public BaseService(BaseRepository<T, Long> repository) {
        this.repository = repository;
    }

    // The findAll method retrieves all entities from the repository, including the
    // ones marked as deleted.
    public List<T> findAll() {
        return repository.findAll();
    }

    // The findAllNonDeleted() method returns a list of non-deleted entities,
    // allowing you to retrieve all entities except the ones that have been
    // logically deleted.
    public List<T> findAllNonDeleted() {
        return repository.findAllByDeletedAtIsNull();
    }

    // The findById method retrieves an entity by its ID, including deleted
    // entities.
    public Optional<T> findById(Long id) {
        return repository.findById(id);
    }

    // The save method saves a new entity or updates an existing one.
    public T save(T entity) {
        return repository.save(entity);
    }

    // The delete method performs logical deletion by marking the entity as deleted
    // using the markAsDeleted method.
    public void delete(Long id) {
        Optional<T> optionalEntity = repository.findById(id);
        optionalEntity.ifPresent(this::markAsDeleted);
    }

    // The markAsDeleted method sets the deletedAt field of the entity to the
    // current time and saves the entity using the repository.
    protected void markAsDeleted(T entity) {
        entity.setDeletedAt(OffsetDateTime.now());
        repository.save(entity);
    }
}
