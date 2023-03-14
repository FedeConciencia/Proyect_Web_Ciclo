
package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.Residence;
import com.proyecto.ciclo.repositories.ResidenceRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResidenceService implements BaseService<Residence>{
    
    @Autowired
    private ResidenceRepository residenceRepository;

    @Override
    @Transactional
    public Residence createRecurso(Residence entity) throws Exception {
        
        try{
            
            Residence residence = residenceRepository.save(entity);
            
            return residence;
            
        }catch(Exception e){
            
            throw new Exception(e.getMessage());
            
        }
                
               
    }
    
}
