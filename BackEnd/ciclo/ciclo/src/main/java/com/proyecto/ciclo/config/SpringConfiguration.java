package com.proyecto.ciclo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.proyecto.ciclo.utils.Constants;

@Configuration
@EnableScheduling
public class SpringConfiguration {
  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedMethods(Constants.ALLOWED_METHODS.toArray(new String[0]))
            .allowedOrigins(Constants.ALLOWED_ORIGINS.toArray(new String[0]))
            .allowedHeaders(Constants.ALLOWED_HEADERS.toArray(new String[0]));
      }
    };
  }
}
