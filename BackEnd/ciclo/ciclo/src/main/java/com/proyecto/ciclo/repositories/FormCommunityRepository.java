
package com.proyecto.ciclo.repositories;

import com.proyecto.ciclo.entities.FormCommunity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormCommunityRepository extends JpaRepository<FormCommunity, Long> {
    
}
