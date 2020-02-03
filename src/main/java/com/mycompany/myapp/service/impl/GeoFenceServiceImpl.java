package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.GeoFenceService;
import com.mycompany.myapp.domain.GeoFence;
import com.mycompany.myapp.repository.GeoFenceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link GeoFence}.
 */
@Service
@Transactional
public class GeoFenceServiceImpl implements GeoFenceService {

    private final Logger log = LoggerFactory.getLogger(GeoFenceServiceImpl.class);

    private final GeoFenceRepository geoFenceRepository;

    public GeoFenceServiceImpl(GeoFenceRepository geoFenceRepository) {
        this.geoFenceRepository = geoFenceRepository;
    }

    /**
     * Save a geoFence.
     *
     * @param geoFence the entity to save.
     * @return the persisted entity.
     */
    @Override
    public GeoFence save(GeoFence geoFence) {
        log.debug("Request to save GeoFence : {}", geoFence);
        return geoFenceRepository.save(geoFence);
    }

    /**
     * Get all the geoFences.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<GeoFence> findAll() {
        log.debug("Request to get all GeoFences");
        return geoFenceRepository.findAll();
    }


    /**
     * Get one geoFence by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<GeoFence> findOne(Long id) {
        log.debug("Request to get GeoFence : {}", id);
        return geoFenceRepository.findById(id);
    }

    /**
     * Delete the geoFence by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete GeoFence : {}", id);
        geoFenceRepository.deleteById(id);
    }
}
