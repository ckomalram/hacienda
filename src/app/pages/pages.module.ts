import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainpageComponent } from './mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VisitorsComponent } from './visitors/visitors.component';
import { ResidentsComponent } from './residents/residents.component';
import { SecurityComponent } from './security/security.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    MainpageComponent,
    DashboardComponent,
    NotfoundComponent,
    VisitorsComponent,
    ResidentsComponent,
    SecurityComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule, FormsModule,ReactiveFormsModule, RouterModule, SharedModule
  ]
})
export class PagesModule { }
