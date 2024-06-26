package com.proyecto.ciclo.entities;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.proyecto.ciclo.validations.FormCommunityValidationGroup;

@Entity
@Table(name = "form_communities")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class FormCommunity extends BaseEntity {

  @NotBlank(groups = FormCommunityValidationGroup.class)
  @Column(name = "name", nullable = false)
  private String name;

  @NotBlank(groups = FormCommunityValidationGroup.class)
  @Email(groups = FormCommunityValidationGroup.class)
  @Column(name = "email", nullable = false, unique = true)
  private String email;

  @NotBlank(groups = FormCommunityValidationGroup.class)
  @Column(name = "phone_number", nullable = false)
  private String phoneNumber;

  @JoinColumn(name = "city_id", nullable = false, referencedColumnName = "id")
  @ManyToOne(fetch = FetchType.EAGER)
  private CityEntity city;

  @NotBlank(groups = FormCommunityValidationGroup.class)
  @Column(name = "occupation", nullable = false)
  private String occupation;

  // Constructors, getters, and setters

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public CityEntity getCity() {
    return city;
  }

  public void setCity(CityEntity city) {
    this.city = city;
  }

  public String getOccupation() {
    return occupation;
  }

  public void setOccupation(String occupation) {
    this.occupation = occupation;
  }

  @Override
  public String toString() {
    return "FormCommunity{" +
        "id=" + getId() +
        ", name='" + getName() + '\'' +
        ", email='" + getEmail() + '\'' +
        ", phoneNumber='" + getPhoneNumber() + '\'' +
        ", city='" + getCity() + '\'' +
        ", occupation='" + getOccupation() + '\'' +
        '}';
  }
}
