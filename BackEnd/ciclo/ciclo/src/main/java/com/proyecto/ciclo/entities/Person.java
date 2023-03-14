
package com.proyecto.ciclo.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "persons")
public class Person extends Base {
    
    @Column(name = "name")
    private String name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "dni")
    private String dni;
    @Column(name = "cuil", unique = true)
    private String cuil;
    @Column(name = "birth_date")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private LocalDate birth_date;
    @Column(name = "email")
    private String email;
    @Column(name = "cell_phone")
    private String cell_phone;
    @Column(name = "second_phone")
    private String second_phone;
    
    @OneToOne(mappedBy = "person", cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = "person", allowSetters = true)
    private User user;
    
    @OneToOne(mappedBy = "person", cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = "person", allowSetters = true)
    private Residence residence;

    public Person() {
    }

    public Person(String name, String last_name, String dni, String cuil, LocalDate birth_date, String email, String cell_phone, String second_phone, Long id, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(id, date_create, date_update, date_delete, state);
        this.name = name;
        this.last_name = last_name;
        this.dni = dni;
        this.cuil = cuil;
        this.birth_date = birth_date;
        this.email = email;
        this.cell_phone = cell_phone;
        this.second_phone = second_phone;
    }

    public Person(String name, String last_name, String dni, String cuil, LocalDate birth_date, String email, String cell_phone, String second_phone, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(date_create, date_update, date_delete, state);
        this.name = name;
        this.last_name = last_name;
        this.dni = dni;
        this.cuil = cuil;
        this.birth_date = birth_date;
        this.email = email;
        this.cell_phone = cell_phone;
        this.second_phone = second_phone;
    }

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getCuil() {
        return cuil;
    }

    public void setCuil(String cuil) {
        this.cuil = cuil;
    }

    public LocalDate getFechaNac() {
        return birth_date;
    }

    public void setFechaNac(LocalDate birth_date) {
        this.birth_date = birth_date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(LocalDate birth_date) {
        this.birth_date = birth_date;
    }

    public String getCell_phone() {
        return cell_phone;
    }

    public void setCell_phone(String cell_phone) {
        this.cell_phone = cell_phone;
    }

    public String getSecond_phone() {
        return second_phone;
    }

    public void setSecond_phone(String second_phone) {
        this.second_phone = second_phone;
    }
    
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Residence getResidence() {
        return residence;
    }

    public void setResidence(Residence residence) {
        this.residence = residence;
    }
    
    

    @Override
    public String toString() {
        return "name: " + name + "\nlast_name: " + last_name + "\ndni: " + dni + "\ncuil: " + cuil + 
                "\nbirth_date: " + birth_date + "\nemail: " + email + "\ncell_phone: " + cell_phone + "\nsecond_phone: " + second_phone;
    }
    
    
}
