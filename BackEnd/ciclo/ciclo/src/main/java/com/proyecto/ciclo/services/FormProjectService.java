package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormProject;
import com.proyecto.ciclo.repositories.FormProjectRepository;
import org.springframework.stereotype.Service;

@Service
public class FormProjectService extends BaseService<FormProject> {
    public FormProjectService(FormProjectRepository repository) {
        super(repository);
    }
}
