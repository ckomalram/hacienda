import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcumbsComponent } from './components/breadcumbs/breadcumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcumbsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[    HeaderComponent,
    SidebarComponent,
    BreadcumbsComponent]
})
export class SharedModule { }
