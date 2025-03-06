import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './dashboards/dashboard.component'
import { DataRecordComponent } from './data-record/data-record.component'

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./dashboards/dashboard.module').then((m) => m.DashboardModule)},
  { path: 'data-record', canActivate: [AuthGuard], loadChildren: () => import('./data-record/data-record.module').then((m) => m.DataRecordModule)},
  { path: 'changepassword', canActivate: [AuthGuard], loadChildren: () => import('./changepass/changepass.module').then((m) => m.ChangePassModule),},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
