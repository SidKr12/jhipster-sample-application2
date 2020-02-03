import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplication2SharedModule } from 'app/shared/shared.module';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail.component';
import { JobUpdateComponent } from './job-update.component';
import { JobDeleteDialogComponent } from './job-delete-dialog.component';
import { jobRoute } from './job.route';

@NgModule({
  imports: [JhipsterSampleApplication2SharedModule, RouterModule.forChild(jobRoute)],
  declarations: [JobComponent, JobDetailComponent, JobUpdateComponent, JobDeleteDialogComponent],
  entryComponents: [JobDeleteDialogComponent]
})
export class JhipsterSampleApplication2JobModule {}
