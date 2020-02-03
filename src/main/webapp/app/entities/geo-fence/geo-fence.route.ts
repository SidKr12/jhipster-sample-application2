import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IGeoFence, GeoFence } from 'app/shared/model/geo-fence.model';
import { GeoFenceService } from './geo-fence.service';
import { GeoFenceComponent } from './geo-fence.component';
import { GeoFenceDetailComponent } from './geo-fence-detail.component';
import { GeoFenceUpdateComponent } from './geo-fence-update.component';

@Injectable({ providedIn: 'root' })
export class GeoFenceResolve implements Resolve<IGeoFence> {
  constructor(private service: GeoFenceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IGeoFence> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((geoFence: HttpResponse<GeoFence>) => {
          if (geoFence.body) {
            return of(geoFence.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new GeoFence());
  }
}

export const geoFenceRoute: Routes = [
  {
    path: '',
    component: GeoFenceComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'jhipsterSampleApplication2App.geoFence.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: GeoFenceDetailComponent,
    resolve: {
      geoFence: GeoFenceResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'jhipsterSampleApplication2App.geoFence.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: GeoFenceUpdateComponent,
    resolve: {
      geoFence: GeoFenceResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'jhipsterSampleApplication2App.geoFence.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: GeoFenceUpdateComponent,
    resolve: {
      geoFence: GeoFenceResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'jhipsterSampleApplication2App.geoFence.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
