//Routes

import {Routes} from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SampleoneComponent} from "../sampleone/sampleone.component";
import { ArrowfuntestComponent } from '../arrowfuntest/arrowfuntest.component';
import { AttributedirComponent } from '../attributedir/attributedir.component';
import { ServicescheckComponent } from '../servicescheck/servicescheck.component';
import { SyncrequestComponent } from '../syncrequest/syncrequest.component';

export const appRoutes: Routes = [
{ path: '', component: DashboardComponent },
{path: 'dashboard', component: DashboardComponent},
{path: 'sampleone', component: SampleoneComponent},
{path: 'arrowfun', component: ArrowfuntestComponent},
{path: 'attrdircomp', component: AttributedirComponent},
{path: 'servicecomp', component: ServicescheckComponent},
{path: 'synccomp', component: SyncrequestComponent}
];
 
