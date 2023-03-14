
package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormProject;
import com.proyecto.ciclo.repositories.FormProjectRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormProjectService implements BaseService<FormProject> {
    
    @Autowired
    private FormProjectRepository formRepository;

    @Override
    @Transactional
    public FormProject createRecurso(FormProject entity) throws Exception {
        
        try{
            
            FormProject form = formRepository.save(entity);
            
            return form;
            
        }catch(Exception e){
            
            throw new Exception(e.getMessage());
            
        }
                
    }           
    
}
