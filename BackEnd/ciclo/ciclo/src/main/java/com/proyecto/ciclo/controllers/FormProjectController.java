package com.proyecto.ciclo.controllers;

import com.proyecto.ciclo.entities.FormProject;
import com.proyecto.ciclo.exceptions.ValidationError;
import com.proyecto.ciclo.services.FormProjectService;
import com.proyecto.ciclo.validations.FormProjectValidationGroup;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/form-projects")
public class FormProjectController {
    private final FormProjectService formProjectService;

    public FormProjectController(FormProjectService formProjectService) {
        this.formProjectService = formProjectService;
    }

    @GetMapping
    public List<FormProject> getAllFormProjects() {
        return formProjectService.findAllNonDeleted();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormProject> getFormProjectById(@PathVariable Long id) {
        return formProjectService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createFormProject(@Validated(FormProjectValidationGroup.class)  @RequestBody FormProject formProject, BindingResult result) {
        if (result.hasErrors()) {
            // Handle validation errors
            List<ValidationError> errors = result.getFieldErrors().stream()
                    .map(error -> new ValidationError(error.getField(), error.getDefaultMessage()))
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errors);
        }

        // Validations passed, proceed with saving the entity
        FormProject createdFormProject = formProjectService.save(formProject);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdFormProject);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormProject> updateFormProject(@PathVariable Long id, @RequestBody FormProject formProject) {
        Optional<FormProject> existingFormProject = formProjectService.findById(id);
        if (existingFormProject.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        FormProject originalFormProject = existingFormProject.get();
        formProject.setId(id);
        formProject.setCreatedAt(originalFormProject.getCreatedAt());

        FormProject updatedFormProject = formProjectService.save(formProject);
        return ResponseEntity.ok(updatedFormProject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormProject(@PathVariable Long id) {
        if (!formProjectService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }

        formProjectService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
