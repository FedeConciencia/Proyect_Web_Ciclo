package com.proyecto.ciclo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {

  public BadRequestException() {
    super(BadRequestException.class.getSimpleName());
  }

  public BadRequestException(String message) {
    super(message);
  }
}
