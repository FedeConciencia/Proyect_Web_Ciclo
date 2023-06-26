package com.proyecto.ciclo.entities;

import java.util.List;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "city")
public class CityEntity extends BaseEntity {

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "zipcode", nullable = false)
  private String zipCode;

  @Column(name = "abbreviation", nullable = false)
  private String abbreviation;

  @ManyToOne(fetch = FetchType.EAGER)
  @JsonIgnore
  @JoinColumn(name = "state_id", nullable = false)
  private StateEntity state;

  @OneToMany(fetch = FetchType.EAGER, mappedBy = "city", cascade = CascadeType.ALL)
  @JsonIgnore
  private List<FormCommunity> formCommunities;

  public CityEntity() {
    // Default constructor required by JPA
  }

  public CityEntity(String name, String zipCode, String abbreviation) {
    this.name = name;
    this.zipCode = zipCode;
    this.abbreviation = abbreviation;
  }

  // Getters and Setters

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getZipCode() {
    return zipCode;
  }

  public void setZipCode(String zipCode) {
    this.zipCode = zipCode;
  }

  public String getAbbreviation() {
    return abbreviation;
  }

  public void setAbbreviation(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public StateEntity getState() {
    return state;
  }

  public void setState(StateEntity state) {
    this.state = state;
  }

  public List<FormCommunity> getFormCommunities() {
    return formCommunities;
  }

  public void setFormCommunities(List<FormCommunity> formCommunities) {
    this.formCommunities = formCommunities;
  }

  @Override
  public String toString() {
    return "CityEntity{" +
        "id=" + getId() +
        ", name='" + getName() + '\'' +
        ", zipCode='" + getZipCode() + '\'' +
        ", state=" + (getState() != null ? getState().getName() : null) +
        '}';
  }

}
