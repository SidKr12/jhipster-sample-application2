package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.GeoFence;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link GeoFence}.
 */
public interface GeoFenceService {

    /**
     * Save a geoFence.
     *
     * @param geoFence the entity to save.
     * @return the persisted entity.
     */
    GeoFence save(GeoFence geoFence);

    /**
     * Get all the geoFences.
     *
     * @return the list of entities.
     */
    List<GeoFence> findAll();


    /**
     * Get the "id" geoFence.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<GeoFence> findOne(Long id);

    /**
     * Delete the "id" geoFence.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
