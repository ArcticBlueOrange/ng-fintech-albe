import { NgModule } from '@angular/core'; import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () => import('./views/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'movements',
    loadChildren: () => import('./views/movements/movements.module').then(m => m.MovementsModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./views/transfer/transfer.module').then(m => m.TransferModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./views/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  { path: '', redirectTo: 'movements', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
