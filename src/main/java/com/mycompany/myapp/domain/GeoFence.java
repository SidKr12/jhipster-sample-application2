package com.mycompany.myapp.domain;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A GeoFence.
 */
@Entity
@Table(name = "geo_fence")
public class GeoFence implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "fence_id")
    private Long fenceID;

    @Column(name = "name")
    private String name;

    @Column(name = "fencecode")
    private String fencecode;

    @Column(name = "type")
    private Integer type;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_time")
    private LocalDate createdTime;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "modified_time")
    private String modifiedTime;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFenceID() {
        return fenceID;
    }

    public GeoFence fenceID(Long fenceID) {
        this.fenceID = fenceID;
        return this;
    }

    public void setFenceID(Long fenceID) {
        this.fenceID = fenceID;
    }

    public String getName() {
        return name;
    }

    public GeoFence name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFencecode() {
        return fencecode;
    }

    public GeoFence fencecode(String fencecode) {
        this.fencecode = fencecode;
        return this;
    }

    public void setFencecode(String fencecode) {
        this.fencecode = fencecode;
    }

    public Integer getType() {
        return type;
    }

    public GeoFence type(Integer type) {
        this.type = type;
        return this;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public GeoFence createdBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDate getCreatedTime() {
        return createdTime;
    }

    public GeoFence createdTime(LocalDate createdTime) {
        this.createdTime = createdTime;
        return this;
    }

    public void setCreatedTime(LocalDate createdTime) {
        this.createdTime = createdTime;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public GeoFence modifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
        return this;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public String getModifiedTime() {
        return modifiedTime;
    }

    public GeoFence modifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }

    public void setModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof GeoFence)) {
            return false;
        }
        return id != null && id.equals(((GeoFence) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "GeoFence{" +
            "id=" + getId() +
            ", fenceID=" + getFenceID() +
            ", name='" + getName() + "'" +
            ", fencecode='" + getFencecode() + "'" +
            ", type=" + getType() +
            ", createdBy='" + getCreatedBy() + "'" +
            ", createdTime='" + getCreatedTime() + "'" +
            ", modifiedBy='" + getModifiedBy() + "'" +
            ", modifiedTime='" + getModifiedTime() + "'" +
            "}";
    }
}
