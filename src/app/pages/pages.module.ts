import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainpageComponent } from './mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainpageComponent,
    DashboardComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule, FormsModule,ReactiveFormsModule, RouterModule, SharedModule
  ]
})
export class PagesModule { }
