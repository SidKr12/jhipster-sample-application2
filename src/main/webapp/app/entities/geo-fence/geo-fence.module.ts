import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplication2SharedModule } from 'app/shared/shared.module';
import { GeoFenceComponent } from './geo-fence.component';
import { GeoFenceDetailComponent } from './geo-fence-detail.component';
import { GeoFenceUpdateComponent } from './geo-fence-update.component';
import { GeoFenceDeleteDialogComponent } from './geo-fence-delete-dialog.component';
import { geoFenceRoute } from './geo-fence.route';

@NgModule({
  imports: [JhipsterSampleApplication2SharedModule, RouterModule.forChild(geoFenceRoute)],
  declarations: [GeoFenceComponent, GeoFenceDetailComponent, GeoFenceUpdateComponent, GeoFenceDeleteDialogComponent],
  entryComponents: [GeoFenceDeleteDialogComponent]
})
export class JhipsterSampleApplication2GeoFenceModule {}
