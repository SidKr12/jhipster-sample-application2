import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IGeoFence } from 'app/shared/model/geo-fence.model';
import { GeoFenceService } from './geo-fence.service';

@Component({
  templateUrl: './geo-fence-delete-dialog.component.html'
})
export class GeoFenceDeleteDialogComponent {
  geoFence?: IGeoFence;

  constructor(protected geoFenceService: GeoFenceService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.geoFenceService.delete(id).subscribe(() => {
      this.eventManager.broadcast('geoFenceListModification');
      this.activeModal.close();
    });
  }
}
