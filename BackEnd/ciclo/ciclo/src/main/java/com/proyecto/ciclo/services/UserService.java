
package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.User;
import com.proyecto.ciclo.repositories.UserRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements BaseService<User> {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public User createRecurso(User entity) throws Exception {
        
        try{
            
            User user = userRepository.save(entity);
            
            return user;
            
        }catch(Exception e){
            
            throw new Exception(e.getMessage());
            
        }
                
               
    }
    
    
    
}
