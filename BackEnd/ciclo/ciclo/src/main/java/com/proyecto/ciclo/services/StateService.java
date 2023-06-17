package com.proyecto.ciclo.services;

import com.proyecto.ciclo.dto.StateWithCitiesDTO;
import com.proyecto.ciclo.entities.StateEntity;
import com.proyecto.ciclo.repositories.StateRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Iterator;

import org.springframework.stereotype.Service;

@Service
public class StateService extends BaseService<StateEntity> {
  private final StateRepository stateRepository;

  public StateService(StateRepository repository) {
    super(repository);
    this.stateRepository = repository;
  }

  public Optional<StateWithCitiesDTO> getStateWithCities(Long stateId) {
    return stateRepository.findByIdWithCities(stateId)
        .map(stateEntity -> {
          StateWithCitiesDTO stateWithCitiesDTO = new StateWithCitiesDTO();
          stateWithCitiesDTO.setId(stateEntity.getId());
          stateWithCitiesDTO.setName(stateEntity.getName());
          stateWithCitiesDTO.setAbbreviation(stateEntity.getAbbreviation());
          stateWithCitiesDTO.setCities(stateEntity.getCities());
          return stateWithCitiesDTO;
        });
  }

  public List<StateWithCitiesDTO> findAllWithCities() {
    List<StateEntity> list = findAllNonDeleted();
    List<StateWithCitiesDTO> response = new ArrayList<StateWithCitiesDTO>();
    Iterator<StateEntity> iterator = list.iterator();

    while (iterator.hasNext()) {
      StateEntity stateEntity = iterator.next();
      StateWithCitiesDTO stateWithCitiesDTO = new StateWithCitiesDTO();
      stateWithCitiesDTO.setId(stateEntity.getId());
      stateWithCitiesDTO.setName(stateEntity.getName());
      stateWithCitiesDTO.setAbbreviation(stateEntity.getAbbreviation());
      stateWithCitiesDTO.setCities(stateEntity.getCities());
      response.add(stateWithCitiesDTO);
      iterator.remove();
    }
    return response;
  }
}