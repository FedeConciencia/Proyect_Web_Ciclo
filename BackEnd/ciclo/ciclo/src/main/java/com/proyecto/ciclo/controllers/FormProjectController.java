package com.proyecto.ciclo.controllers;

import com.proyecto.ciclo.entities.FormProject;
import com.proyecto.ciclo.exceptions.DuplicateEmailException;
import com.proyecto.ciclo.exceptions.ValidationError;
import com.proyecto.ciclo.services.FormProjectService;
import com.proyecto.ciclo.validations.FormProjectValidationGroup;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@RestController
@RequestMapping("/api/v1/form-projects")
public class FormProjectController {
	private final FormProjectService formProjectService;

	public FormProjectController(FormProjectService formProjectService) {
		this.formProjectService = formProjectService;
	}

	@GetMapping
	public List<FormProject> getAllFormProjects(
			@RequestParam(required = false, name = "createdAtFilter") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate createdAtFilter,
			@RequestParam(required = false, name = "startDateFilter") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDateFilter,
			@RequestParam(required = false, name = "endDateFilter") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDateFilter) {
		if (createdAtFilter != null) {
			return formProjectService.findByCreatedAt(createdAtFilter.atStartOfDay().atOffset(ZoneOffset.ofHours(-3)));
		} else if (startDateFilter != null && endDateFilter != null) {
			OffsetDateTime startDate = startDateFilter.atStartOfDay().atOffset(ZoneOffset.ofHours(-3));
			OffsetDateTime endDate = endDateFilter.atStartOfDay().atOffset(ZoneOffset.ofHours(-3));
			return formProjectService.findByCreatedAtRange(startDate, endDate);
		} else {
			// No filter applied, return all non-deleted form projects
			return formProjectService.findAllNonDeleted();
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<FormProject> getFormProjectById(@PathVariable Long id) {
		return formProjectService.findById(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<?> createFormProject(
			@Validated(FormProjectValidationGroup.class) @RequestBody FormProject formProject, BindingResult result) {
		if (result.hasErrors()) {
			// Handle validation errors
			List<ValidationError> errors = result.getFieldErrors().stream()
					.map(error -> new ValidationError(error.getField(), error.getDefaultMessage()))
					.collect(Collectors.toList());
			return ResponseEntity.badRequest().body(errors);
		}
		try {
			// Validations passed, proceed with saving the entity
			FormProject createdFormProject = formProjectService.save(formProject);
			return ResponseEntity.status(HttpStatus.CREATED).body(createdFormProject);
		} catch (DuplicateEmailException ex) {
			// Handle duplicate email exception
			List<ValidationError> error = new ArrayList<>();
			error.add(new ValidationError("email", "Correo Ya Existente"));
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
		}
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
