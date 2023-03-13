import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
