package com.proyecto.ciclo.controllers;

import com.proyecto.ciclo.dto.StateWithCitiesDTO;
import com.proyecto.ciclo.entities.StateEntity;
import com.proyecto.ciclo.services.StateService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/states")
public class StateController {

  private final StateService stateService;

  public StateController(StateService stateService) {
    this.stateService = stateService;
  }

  @GetMapping
  public List<StateWithCitiesDTO> getAllStates() {
    return stateService.findAllWithCities();
  }

  @GetMapping("/{id}")
  public ResponseEntity<StateWithCitiesDTO> getStateById(@PathVariable Long id) {
    return stateService.getStateWithCities(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

}
