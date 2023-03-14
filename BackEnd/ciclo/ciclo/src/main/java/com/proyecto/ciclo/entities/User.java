
package com.proyecto.ciclo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User extends Base {
    
    @Column(name = "user", unique = true)
    private String user;
    @Column(name = "password")
    private String password;
    @Column(name = "role")
    private String role;
    
    @OneToOne
    @JoinColumn(name = "id_person")
    @JsonIgnoreProperties(value = "user", allowSetters = true)
    private Person person;

    public User() {
    }

    public User(String user, String password, String role, Long id, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(id, date_create, date_update, date_delete, state);
        this.user = user;
        this.password = password;
        this.role = role;
    }

    public User(String user, String password, String role, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(date_create, date_update, date_delete, state);
        this.user = user;
        this.password = password;
        this.role = role;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
    
    
    @Override
    public String toString() {
        return "user: " + user + "\n password: " + password + "\nrole: " + role;
    }
    

}
