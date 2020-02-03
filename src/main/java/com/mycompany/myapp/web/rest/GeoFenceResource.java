package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.GeoFence;
import com.mycompany.myapp.service.GeoFenceService;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.GeoFence}.
 */
@RestController
@RequestMapping("/api")
public class GeoFenceResource {

    private final Logger log = LoggerFactory.getLogger(GeoFenceResource.class);

    private static final String ENTITY_NAME = "geoFence";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final GeoFenceService geoFenceService;

    public GeoFenceResource(GeoFenceService geoFenceService) {
        this.geoFenceService = geoFenceService;
    }

    /**
     * {@code POST  /geo-fences} : Create a new geoFence.
     *
     * @param geoFence the geoFence to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new geoFence, or with status {@code 400 (Bad Request)} if the geoFence has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/geo-fences")
    public ResponseEntity<GeoFence> createGeoFence(@RequestBody GeoFence geoFence) throws URISyntaxException {
        log.debug("REST request to save GeoFence : {}", geoFence);
        if (geoFence.getId() != null) {
            throw new BadRequestAlertException("A new geoFence cannot already have an ID", ENTITY_NAME, "idexists");
        }
        GeoFence result = geoFenceService.save(geoFence);
        return ResponseEntity.created(new URI("/api/geo-fences/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /geo-fences} : Updates an existing geoFence.
     *
     * @param geoFence the geoFence to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated geoFence,
     * or with status {@code 400 (Bad Request)} if the geoFence is not valid,
     * or with status {@code 500 (Internal Server Error)} if the geoFence couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/geo-fences")
    public ResponseEntity<GeoFence> updateGeoFence(@RequestBody GeoFence geoFence) throws URISyntaxException {
        log.debug("REST request to update GeoFence : {}", geoFence);
        if (geoFence.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        GeoFence result = geoFenceService.save(geoFence);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, geoFence.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /geo-fences} : get all the geoFences.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of geoFences in body.
     */
    @GetMapping("/geo-fences")
    public List<GeoFence> getAllGeoFences() {
        log.debug("REST request to get all GeoFences");
        return geoFenceService.findAll();
    }

    /**
     * {@code GET  /geo-fences/:id} : get the "id" geoFence.
     *
     * @param id the id of the geoFence to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the geoFence, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/geo-fences/{id}")
    public ResponseEntity<GeoFence> getGeoFence(@PathVariable Long id) {
        log.debug("REST request to get GeoFence : {}", id);
        Optional<GeoFence> geoFence = geoFenceService.findOne(id);
        return ResponseUtil.wrapOrNotFound(geoFence);
    }

    /**
     * {@code DELETE  /geo-fences/:id} : delete the "id" geoFence.
     *
     * @param id the id of the geoFence to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/geo-fences/{id}")
    public ResponseEntity<Void> deleteGeoFence(@PathVariable Long id) {
        log.debug("REST request to delete GeoFence : {}", id);
        geoFenceService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
