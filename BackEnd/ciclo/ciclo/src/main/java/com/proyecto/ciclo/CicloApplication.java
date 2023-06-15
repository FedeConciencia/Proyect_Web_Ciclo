package com.proyecto.ciclo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class CicloApplication {

	@GetMapping("/")
	public String home() {
		return "We are alive";
	}

	public static void main(String[] args) {
		SpringApplication.run(CicloApplication.class, args);
	}
}
