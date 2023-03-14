
package com.proyecto.ciclo.repositories;

import com.proyecto.ciclo.entities.FormProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormProjectRepository extends JpaRepository<FormProject, Long> {
    
}
