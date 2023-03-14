
package com.proyecto.ciclo.controllers;

import com.proyecto.ciclo.entities.User;
import com.proyecto.ciclo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/user")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @PostMapping("/")
    public ResponseEntity<?> create(@RequestBody User entity){
        
        try{
            
            return ResponseEntity.status(HttpStatus.OK).body(userService.createRecurso(entity));
            
        }catch(Exception e){
            
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"Error. Por Favor intente mas tarde.\"}");
                
        }
        
    }
    
}
