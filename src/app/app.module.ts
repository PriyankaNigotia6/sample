import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleoneComponent } from './sampleone/sampleone.component';
import { appRoutes } from './routes/routes';
import {RouterModule} from '@angular/router';
import { ArrowfuntestComponent } from './arrowfuntest/arrowfuntest.component';
import { AttdirDirective } from './directive/AttrDir/attdir.directive';
import { AdvanceattdirDirective } from './directive/advanceAttrDir/advanceattdir.directive';
import { AttributedirComponent } from './attributedir/attributedir.component';
import { OwnIfDirective } from './directive/own-if/own-if.directive';
import { ServicescheckComponent } from './servicescheck/servicescheck.component';
import {AppserviceService} from './services/appservice.service';
import { SyncrequestComponent } from './syncrequest/syncrequest.component';

@NgModule({
  declarations: [ AppComponent,DashboardComponent,SampleoneComponent, ArrowfuntestComponent, AttdirDirective, AdvanceattdirDirective, AttributedirComponent,OwnIfDirective, ServicescheckComponent, SyncrequestComponent],
  imports: [ BrowserModule,FormsModule ,RouterModule.forRoot(appRoutes)],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }