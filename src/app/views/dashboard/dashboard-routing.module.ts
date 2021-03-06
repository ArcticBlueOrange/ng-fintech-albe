import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cards', loadChildren: () => import('../cards/cards.module').then(m => m.CardsModule) },
  { path: 'movements', loadChildren: () => import('../movements/movements.module').then(m => m.MovementsModule) },
  { path: 'transfer', loadChildren: () => import('../transfer/transfer.module').then(m => m.TransferModule) },
  { path: 'appointments', loadChildren: () => import('../appointments/appointments.module').then(m => m.AppointmentsModule) },
  { path: 'taxes', loadChildren: () => import('../taxes/taxes.module').then(m => m.TaxesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
