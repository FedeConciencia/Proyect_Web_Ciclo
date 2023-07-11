package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormCommunity;
import com.proyecto.ciclo.repositories.FormCommunityRepository;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FormCommunityService extends BaseService<FormCommunity> {
  public FormCommunityService(FormCommunityRepository repository) {
    super(repository);
  }

  public List<FormCommunity> findByCreatedAt(OffsetDateTime createdAt) {
    return ((FormCommunityRepository) repository).findByCreatedAt(createdAt);
  }

  public List<FormCommunity> findByCreatedAtRange(OffsetDateTime startDate, OffsetDateTime endDate) {
      return ((FormCommunityRepository) repository).findByCreatedAtRange(startDate, endDate);
  }
}
