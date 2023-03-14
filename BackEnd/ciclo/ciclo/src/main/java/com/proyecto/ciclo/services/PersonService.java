
package com.proyecto.ciclo.services;


import com.proyecto.ciclo.entities.Person;
import com.proyecto.ciclo.repositories.PersonRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService implements BaseService<Person> {
    
    
    @Autowired
    private PersonRepository personRepository;

    @Override
    @Transactional
    public Person createRecurso(Person entity) throws Exception {
        
        try{
            
            Person person = personRepository.save(entity);
            
            return person;
            
        }catch(Exception e){
            
            throw new Exception(e.getMessage());
            
        }
                
               
    }

   
    
}
