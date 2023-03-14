
package com.proyecto.ciclo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "residences")
public class Residence extends Base {
    
    @Column(name = "street")
    private String street;
    @Column(name = "number")
    private String number;
    @Column(name = "location")
    private String location;
    @Column(name = "province")
    private String province;
    @Column(name = "country")
    private String country;
    
    @OneToOne
    @JoinColumn(name = "id_person")
    @JsonIgnoreProperties(value = "residence", allowSetters = true)
    private Person person;

    public Residence() {
    }

    public Residence(String street, String number, String location, String province, String country, Long id, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(id, date_create, date_update, date_delete, state);
        this.street = street;
        this.number = number;
        this.location = location;
        this.province = province;
        this.country = country;
    }

    public Residence(String street, String number, String location, String province, String country, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(date_create, date_update, date_delete, state);
        this.street = street;
        this.number = number;
        this.location = location;
        this.province = province;
        this.country = country;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
    
    
    @Override
    public String toString() {
        return "street: " + street + "\nnumber: " + number + "\nlocation: " + location + "\nprovince: " + province + "\ncountry: " + country;
    }
    
    
}
