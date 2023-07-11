package com.proyecto.ciclo.entities;

import org.hibernate.annotations.Filter;
import org.hibernate.annotations.FilterDef;
import org.hibernate.annotations.ParamDef;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@MappedSuperclass
@FilterDef(name = "deletedEntityFilter", parameters = @ParamDef(name = "deleted", type = "boolean"))
@Filter(name = "deletedEntityFilter", condition = "deleted_at IS NULL OR deleted = :deleted")
@FilterDef(name = "createdAtFilter", parameters = @ParamDef(name = "createdAt", type = "java.time.OffsetDateTime"))
@Filter(name = "createdAtFilter", condition = "DATE(created_at) = DATE(:createdAt)")
public class BaseEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable = false, name = "created_at")
    private OffsetDateTime createdAt;

    @NotNull
    @Column(nullable = false, name = "updated_at")
    private OffsetDateTime updatedAt;

    @Column(name = "deleted_at")
    private OffsetDateTime deletedAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public OffsetDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public OffsetDateTime getDeletedAt() {
        return deletedAt;
    }

    public void setDeletedAt(OffsetDateTime deletedAt) {
        this.deletedAt = deletedAt;
    }

    @PrePersist
    protected void onCreate() {
        createdAt = OffsetDateTime.now(ZoneOffset.UTC);
        updatedAt = OffsetDateTime.now(ZoneOffset.UTC);
    }

    @PreUpdate
    protected void onUpdate() {
        // Extra validation, Just in Case
        if (createdAt == null) {
            createdAt = this.getCreatedAt();
        }
        updatedAt = OffsetDateTime.now(ZoneOffset.UTC);
    }

    public void markAsDeleted() {
        deletedAt = OffsetDateTime.now(ZoneOffset.UTC);
    }

    public boolean isDeleted() {
        return deletedAt != null;
    }

    @Override
    public String toString() {
        return "BaseEntity [id=" + id + ", createdAt=" + createdAt + ", updatedAt="
                + updatedAt + ", deletedAt=" + deletedAt + "]";
    }

}
