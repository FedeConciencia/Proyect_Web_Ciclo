package com.proyecto.ciclo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.proyecto.ciclo.validations.FormProjectValidationGroup;

@Entity
@Table(name = "form_projects")
public class FormProject extends BaseEntity {
    @NotBlank(groups = FormProjectValidationGroup.class)
    @Column(name = "name")
    private String name;

    @NotBlank(groups = FormProjectValidationGroup.class)
    @Email(groups = FormProjectValidationGroup.class)
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @NotBlank(groups = FormProjectValidationGroup.class)
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "project_type")
    @Enumerated(EnumType.STRING)
    private ProjectType projectType;

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

    public ProjectType getProjectType() {
        return projectType;
    }

    public void setProjectType(ProjectType projectType) {
        this.projectType = projectType;
    }

    // Enum for project type
    public enum ProjectType {
        CONSTRUCCION_DE_CERO("Construcción de cero"),
        REMODELACION("Remodelación");

        private final String value;

        ProjectType(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }
    }
}
