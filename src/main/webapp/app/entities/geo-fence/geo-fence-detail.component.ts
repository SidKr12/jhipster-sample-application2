import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGeoFence } from 'app/shared/model/geo-fence.model';

@Component({
  selector: 'jhi-geo-fence-detail',
  templateUrl: './geo-fence-detail.component.html'
})
export class GeoFenceDetailComponent implements OnInit {
  geoFence: IGeoFence | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ geoFence }) => {
      this.geoFence = geoFence;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
