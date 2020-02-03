package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.GeoFence;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the GeoFence entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GeoFenceRepository extends JpaRepository<GeoFence, Long> {

}
