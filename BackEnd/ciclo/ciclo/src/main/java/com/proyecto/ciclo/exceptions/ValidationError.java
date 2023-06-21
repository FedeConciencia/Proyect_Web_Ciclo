package com.proyecto.ciclo.exceptions;

public class ValidationError {
  private String field;
  private String message;

  public ValidationError(String field, String message) {
    this.field = field;
    this.message = message;
  }

  // Getters and setters

  public String getField() {
    return this.field;
  }

  public String getMessage() {
    return this.message;
  }
}