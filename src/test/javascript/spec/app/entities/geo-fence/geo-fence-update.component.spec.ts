import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { JhipsterSampleApplication2TestModule } from '../../../test.module';
import { GeoFenceUpdateComponent } from 'app/entities/geo-fence/geo-fence-update.component';
import { GeoFenceService } from 'app/entities/geo-fence/geo-fence.service';
import { GeoFence } from 'app/shared/model/geo-fence.model';

describe('Component Tests', () => {
  describe('GeoFence Management Update Component', () => {
    let comp: GeoFenceUpdateComponent;
    let fixture: ComponentFixture<GeoFenceUpdateComponent>;
    let service: GeoFenceService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterSampleApplication2TestModule],
        declarations: [GeoFenceUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(GeoFenceUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(GeoFenceUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GeoFenceService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new GeoFence(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new GeoFence();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
