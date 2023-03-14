
package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.FormCommunity;
import com.proyecto.ciclo.repositories.FormCommunityRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormCommunityService implements BaseService<FormCommunity> {
    
    @Autowired
    private FormCommunityRepository formRepository;

    @Override
    @Transactional
    public FormCommunity createRecurso(FormCommunity entity) throws Exception {
        
        try{
            
            FormCommunity form = formRepository.save(entity);
            
            return form;
            
        }catch(Exception e){
            
            throw new Exception(e.getMessage());
            
        }
                
               
    }
    
}
