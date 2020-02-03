package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class GeoFenceTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(GeoFence.class);
        GeoFence geoFence1 = new GeoFence();
        geoFence1.setId(1L);
        GeoFence geoFence2 = new GeoFence();
        geoFence2.setId(geoFence1.getId());
        assertThat(geoFence1).isEqualTo(geoFence2);
        geoFence2.setId(2L);
        assertThat(geoFence1).isNotEqualTo(geoFence2);
        geoFence1.setId(null);
        assertThat(geoFence1).isNotEqualTo(geoFence2);
    }
}
