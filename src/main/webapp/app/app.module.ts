import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication2SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication2CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication2AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication2HomeModule } from './home/home.module';
import { JhipsterSampleApplication2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication2SharedModule,
    JhipsterSampleApplication2CoreModule,
    JhipsterSampleApplication2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication2EntityModule,
    JhipsterSampleApplication2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplication2AppModule {}
