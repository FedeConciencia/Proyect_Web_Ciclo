package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormProject;
import com.proyecto.ciclo.exceptions.DuplicateEmailException;
import com.proyecto.ciclo.repositories.FormProjectRepository;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FormProjectService extends BaseService<FormProject> {
	public FormProjectService(FormProjectRepository repository) {
		super(repository);
	}

	public FormProject save(FormProject formProject) {
		String email = formProject.getEmail();
		// Check if the email already exists
		if (isDuplicateEmail(email)) {
			throw new DuplicateEmailException("Email already exists.");
		}
		// Save the entity
		return ((FormProjectRepository) repository).save(formProject);
	}

	private boolean isDuplicateEmail(String email) {
		// Logic to check if the email already exists in the database
		// You can use the repository to perform the check, for example:
		return ((FormProjectRepository) repository).existsByEmail(email);
	}

	public List<FormProject> findByCreatedAt(OffsetDateTime createdAt) {
		return ((FormProjectRepository) repository).findByCreatedAt(createdAt);
	}

	public List<FormProject> findByCreatedAtRange(OffsetDateTime startDate, OffsetDateTime endDate) {
		return ((FormProjectRepository) repository).findByCreatedAtRange(startDate, endDate);
	}
}
