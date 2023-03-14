
package com.proyecto.ciclo.entities;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "form_communities")
public class FormCommunity extends Base{
    
    @Column(name = "name")
    private String name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "email")
    private String email;
    @Column(name = "cell_phone")
    private String cell_phone;
    @Column(name = "location")
    private String location;
    @Column(name = "province")
    private String province;
    @Column(name = "occupation")
    private String occupation;


    public FormCommunity() {
    }
    
   
    public FormCommunity(String name, String last_name, String email, String cell_phone, String location, String province, String occupation, Long id, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(id, date_create, date_update, date_delete, state);
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.cell_phone = cell_phone;
        this.location = location;
        this.province = province;
        this.occupation = occupation;

    }

    public FormCommunity(String name, String last_name, String email, String cell_phone, String location, String province, String occupation, LocalDate date_create, LocalDate date_update, LocalDate date_delete, String state) {
        super(date_create, date_update, date_delete, state);
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.cell_phone = cell_phone;
        this.location = location;
        this.province = province;
        this.occupation = occupation;
       
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCell_phone() {
        return cell_phone;
    }

    public void setCell_phone(String cell_phone) {
        this.cell_phone = cell_phone;
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

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    

    @Override
    public String toString() {
        return  "name: " + name + "\nlast_name: " + last_name + "\nemail: " + email + 
                "\ncell_phone: " + cell_phone + "\nlocation: " + location + "\nprovince: " + province + 
                "\noccupation: " + occupation;
    }
    
    
    
}
