package com.proyecto.ciclo.services;

import com.proyecto.ciclo.entities.CityEntity;
import com.proyecto.ciclo.repositories.CityRepository;
import org.springframework.stereotype.Service;

@Service
public class CityService extends BaseService<CityEntity> {
    public CityService(CityRepository repository) {
        super(repository);
    }
}
