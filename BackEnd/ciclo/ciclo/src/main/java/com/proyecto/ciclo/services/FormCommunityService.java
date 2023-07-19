package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormCommunity;
import com.proyecto.ciclo.exceptions.DuplicateEmailException;
import com.proyecto.ciclo.repositories.FormCommunityRepository;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FormCommunityService extends BaseService<FormCommunity> {
  public FormCommunityService(FormCommunityRepository repository) {
    super(repository);
  }

  public FormCommunity save(FormCommunity formCommunity) {
    String email = formCommunity.getEmail();
    // Check if the email already exists
    if (isDuplicateEmail(email)) {
      throw new DuplicateEmailException("Email already exists.");
    }
    // Save the entity
    return ((FormCommunityRepository) repository).save(formCommunity);
  }

  private boolean isDuplicateEmail(String email) {
    // Logic to check if the email already exists in the database
    // You can use the repository to perform the check, for example:
    return ((FormCommunityRepository) repository).existsByEmail(email);
  }

  public List<FormCommunity> findByCreatedAt(OffsetDateTime createdAt) {
    return ((FormCommunityRepository) repository).findByCreatedAt(createdAt);
  }

  public List<FormCommunity> findByCreatedAtRange(OffsetDateTime startDate, OffsetDateTime endDate) {
    return ((FormCommunityRepository) repository).findByCreatedAtRange(startDate, endDate);
  }
}
