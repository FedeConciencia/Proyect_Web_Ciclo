package com.proyecto.ciclo.controllers;

import com.proyecto.ciclo.entities.FormCommunity;
import com.proyecto.ciclo.services.FormCommunityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/form-communities")
public class FormCommunityController {
  private final FormCommunityService formCommunityService;

  public FormCommunityController(FormCommunityService formCommunityService) {
    this.formCommunityService = formCommunityService;
  }

  @GetMapping
  public List<FormCommunity> getAllFormCommunities() {
    return formCommunityService.findAllNonDeleted();
  }

  @GetMapping("/{id}")
  public ResponseEntity<FormCommunity> getFormCommunityById(@PathVariable Long id) {
    return formCommunityService.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<FormCommunity> createFormCommunity(@RequestBody FormCommunity formCommunity) {
    FormCommunity createdFormCommunity = formCommunityService.save(formCommunity);
    return ResponseEntity.status(HttpStatus.CREATED).body(createdFormCommunity);
  }

  @PutMapping("/{id}")
  public ResponseEntity<FormCommunity> updateFormCommunity(@PathVariable Long id, @RequestBody FormCommunity formCommunity) {
    Optional<FormCommunity> existingFormCommunity = formCommunityService.findById(id);
    if (existingFormCommunity.isEmpty()) {
      return ResponseEntity.notFound().build();
    }

    FormCommunity originalFormCommunity = existingFormCommunity.get();
    formCommunity.setId(id);
    formCommunity.setCreatedAt(originalFormCommunity.getCreatedAt());

    FormCommunity updatedFormCommunity = formCommunityService.save(formCommunity);
    return ResponseEntity.ok(updatedFormCommunity);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteFormCommunity(@PathVariable Long id) {
    if (!formCommunityService.findById(id).isPresent()) {
      return ResponseEntity.notFound().build();
    }

    formCommunityService.delete(id);
    return ResponseEntity.noContent().build();
  }
}
