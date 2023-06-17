package com.proyecto.ciclo.dto;

import com.proyecto.ciclo.entities.CityEntity;

import java.util.List;

public class StateWithCitiesDTO {
  private Long id;
  private String name;
  private String abbreviation;
  private List<CityEntity> cities;

  public StateWithCitiesDTO() {
  }

  public StateWithCitiesDTO(Long id, String name, String abbreviation, List<CityEntity> cities) {
    this.id = id;
    this.name = name;
    this.abbreviation = abbreviation;
    this.cities = cities;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAbbreviation() {
    return abbreviation;
  }

  public void setAbbreviation(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public List<CityEntity> getCities() {
    return cities;
  }

  public void setCities(List<CityEntity> cities) {
    this.cities = cities;
  }
}
