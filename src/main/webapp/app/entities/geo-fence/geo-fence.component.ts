import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IGeoFence } from 'app/shared/model/geo-fence.model';
import { GeoFenceService } from './geo-fence.service';
import { GeoFenceDeleteDialogComponent } from './geo-fence-delete-dialog.component';

@Component({
  selector: 'jhi-geo-fence',
  templateUrl: './geo-fence.component.html'
})
export class GeoFenceComponent implements OnInit, OnDestroy {
  geoFences?: IGeoFence[];
  eventSubscriber?: Subscription;

  constructor(protected geoFenceService: GeoFenceService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.geoFenceService.query().subscribe((res: HttpResponse<IGeoFence[]>) => {
      this.geoFences = res.body ? res.body : [];
    });
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInGeoFences();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IGeoFence): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInGeoFences(): void {
    this.eventSubscriber = this.eventManager.subscribe('geoFenceListModification', () => this.loadAll());
  }

  delete(geoFence: IGeoFence): void {
    const modalRef = this.modalService.open(GeoFenceDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.geoFence = geoFence;
  }
}
