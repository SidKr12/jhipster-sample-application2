import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhipsterSampleApplication2TestModule } from '../../../test.module';
import { GeoFenceComponent } from 'app/entities/geo-fence/geo-fence.component';
import { GeoFenceService } from 'app/entities/geo-fence/geo-fence.service';
import { GeoFence } from 'app/shared/model/geo-fence.model';

describe('Component Tests', () => {
  describe('GeoFence Management Component', () => {
    let comp: GeoFenceComponent;
    let fixture: ComponentFixture<GeoFenceComponent>;
    let service: GeoFenceService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterSampleApplication2TestModule],
        declarations: [GeoFenceComponent],
        providers: []
      })
        .overrideTemplate(GeoFenceComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GeoFenceComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GeoFenceService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new GeoFence(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.geoFences && comp.geoFences[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
