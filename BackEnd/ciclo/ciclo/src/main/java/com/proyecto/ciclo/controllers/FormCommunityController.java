package com.proyecto.ciclo.controllers;

import com.proyecto.ciclo.entities.FormCommunity;
import com.proyecto.ciclo.exceptions.DuplicateEmailException;
import com.proyecto.ciclo.exceptions.ValidationError;
import com.proyecto.ciclo.services.FormCommunityService;
import com.proyecto.ciclo.validations.FormCommunityValidationGroup;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/form-communities")
public class FormCommunityController {
  private final FormCommunityService formCommunityService;

  public FormCommunityController(FormCommunityService formCommunityService) {
    this.formCommunityService = formCommunityService;
  }

  @GetMapping
  public List<FormCommunity> getAllFormCommunities(
      @RequestParam(required = false, name = "createdAtFilter") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate createdAtFilter,
      @RequestParam(required = false, name = "startDateFilter") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDateFilter,
      @RequestParam(required = false, name = "endDateFilter") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDateFilter) {
    if (createdAtFilter != null) {
      return formCommunityService.findByCreatedAt(createdAtFilter.atStartOfDay().atOffset(ZoneOffset.ofHours(-3)));
    } else if (startDateFilter != null && endDateFilter != null) {
      OffsetDateTime startDate = startDateFilter.atStartOfDay().atOffset(ZoneOffset.ofHours(-3));
      OffsetDateTime endDate = endDateFilter.atStartOfDay().atOffset(ZoneOffset.ofHours(-3));
      return formCommunityService.findByCreatedAtRange(startDate, endDate);
    } else {
      return formCommunityService.findAllNonDeleted();
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<FormCommunity> getFormCommunityById(@PathVariable Long id) {
    return formCommunityService.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<?> createFormCommunity(
      @Validated(FormCommunityValidationGroup.class) @RequestBody FormCommunity formCommunity, BindingResult result) {
    if (result.hasErrors()) {
      // Handle validation errors
      List<ValidationError> errors = result.getFieldErrors().stream()
          .map(error -> new ValidationError(error.getField(), error.getDefaultMessage()))
          .collect(Collectors.toList());
      return ResponseEntity.badRequest().body(errors);
    }
    try {
      // Validations passed, proceed with saving the entity
      FormCommunity createdFormCommunity = formCommunityService.save(formCommunity);
      return ResponseEntity.status(HttpStatus.CREATED).body(createdFormCommunity);
    } catch (DuplicateEmailException ex) {
      // Handle duplicate email exception
      List<ValidationError> error = new ArrayList<>();
      error.add(new ValidationError("email", "Correo Ya Existente"));
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<FormCommunity> updateFormCommunity(@PathVariable Long id,
      @RequestBody FormCommunity formCommunity) {
    Optional<FormCommunity> existingFormCommunity = formCommunityService.findById(id);
    if (existingFormCommunity.isEmpty()) {
      return ResponseEntity.notFound().build();
    }

    FormCommunity originalFormCommunity = existingFormCommunity.get();
    formCommunity.setId(id);
    formCommunity.setCreatedAt(originalFormCommunity.getCreatedAt());

    FormCommunity updatedFormCommunity = formCommunityService.save(formCommunity);
    return ResponseEntity.ok(updatedFormCommunity);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteFormCommunity(@PathVariable Long id) {
    if (!formCommunityService.findById(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }

    formCommunityService.delete(id);
    return ResponseEntity.noContent().build();
  }
}
