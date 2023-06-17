package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormCommunity;
import com.proyecto.ciclo.repositories.FormCommunityRepository;
import org.springframework.stereotype.Service;

@Service
public class FormCommunityService extends BaseService<FormCommunity> {
  public FormCommunityService(FormCommunityRepository repository) {
    super(repository);
  }
}
