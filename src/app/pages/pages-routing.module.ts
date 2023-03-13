import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainpageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'dashboard' },
      },
      // { path: 'grafica1', component: Grafica1Component , data: {titulo: 'grafica1'} },
      // { path: 'progress', component: ProgressComponent , data: {titulo: 'progress'} },
      // { path: 'account-settings', component: AccountSettingComponent , data: {titulo: 'account-settings'} },
      // { path: 'rxjs', component: RxjsComponent , data: {titulo: 'rxjs'} },
      // { path: 'profile', component: ProfileComponent , data: {titulo: 'Perfil de usuario'} },

      // // Mantenimientos users
      // { path: 'users', component: UserComponent  , data: {titulo: 'Mantenimiento de usuarios'} },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
