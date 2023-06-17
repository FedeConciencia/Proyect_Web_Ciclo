package com.proyecto.ciclo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "states")
public class StateEntity extends BaseEntity {
    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "abbreviation")
    private String abbreviation;

    @OneToMany(mappedBy = "state", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<CityEntity> cities = new ArrayList<>();
    // Constructors, getters, and setters

    public StateEntity() {
    }

    public StateEntity(String name, String abbreviation) {
        this.setName(name);
        this.abbreviation = abbreviation;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CityEntity> getCities() {
        return cities;
    }

    public void setCities(List<CityEntity> cities) {
        this.cities = cities;
    }

    public void addCity(CityEntity city) {
        cities.add(city);
        city.setState(this);
    }

    public void removeCity(CityEntity city) {
        cities.remove(city);
        city.setState(null);
    }

    @Override
    public String toString() {
        return "StateEntity{" +
                "id=" + getId() +
                ", name='" + getName() + '\'' +
                ", abbreviation='" + getAbbreviation() + '\'' +
                '}';
    }
}
