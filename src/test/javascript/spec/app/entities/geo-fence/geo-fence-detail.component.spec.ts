import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterSampleApplication2TestModule } from '../../../test.module';
import { GeoFenceDetailComponent } from 'app/entities/geo-fence/geo-fence-detail.component';
import { GeoFence } from 'app/shared/model/geo-fence.model';

describe('Component Tests', () => {
  describe('GeoFence Management Detail Component', () => {
    let comp: GeoFenceDetailComponent;
    let fixture: ComponentFixture<GeoFenceDetailComponent>;
    const route = ({ data: of({ geoFence: new GeoFence(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterSampleApplication2TestModule],
        declarations: [GeoFenceDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(GeoFenceDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GeoFenceDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load geoFence on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.geoFence).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
