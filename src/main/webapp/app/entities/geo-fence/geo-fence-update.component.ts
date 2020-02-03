import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { IGeoFence, GeoFence } from 'app/shared/model/geo-fence.model';
import { GeoFenceService } from './geo-fence.service';

@Component({
  selector: 'jhi-geo-fence-update',
  templateUrl: './geo-fence-update.component.html'
})
export class GeoFenceUpdateComponent implements OnInit {
  isSaving = false;
  createdTimeDp: any;

  editForm = this.fb.group({
    id: [],
    fenceID: [],
    name: [],
    fencecode: [],
    type: [],
    createdBy: [],
    createdTime: [],
    modifiedBy: [],
    modifiedTime: []
  });

  constructor(protected geoFenceService: GeoFenceService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ geoFence }) => {
      this.updateForm(geoFence);
    });
  }

  updateForm(geoFence: IGeoFence): void {
    this.editForm.patchValue({
      id: geoFence.id,
      fenceID: geoFence.fenceID,
      name: geoFence.name,
      fencecode: geoFence.fencecode,
      type: geoFence.type,
      createdBy: geoFence.createdBy,
      createdTime: geoFence.createdTime,
      modifiedBy: geoFence.modifiedBy,
      modifiedTime: geoFence.modifiedTime
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const geoFence = this.createFromForm();
    if (geoFence.id !== undefined) {
      this.subscribeToSaveResponse(this.geoFenceService.update(geoFence));
    } else {
      this.subscribeToSaveResponse(this.geoFenceService.create(geoFence));
    }
  }

  private createFromForm(): IGeoFence {
    return {
      ...new GeoFence(),
      id: this.editForm.get(['id'])!.value,
      fenceID: this.editForm.get(['fenceID'])!.value,
      name: this.editForm.get(['name'])!.value,
      fencecode: this.editForm.get(['fencecode'])!.value,
      type: this.editForm.get(['type'])!.value,
      createdBy: this.editForm.get(['createdBy'])!.value,
      createdTime: this.editForm.get(['createdTime'])!.value,
      modifiedBy: this.editForm.get(['modifiedBy'])!.value,
      modifiedTime: this.editForm.get(['modifiedTime'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IGeoFence>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
