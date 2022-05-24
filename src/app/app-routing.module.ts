import { NgModule } from '@angular/core'; import { RouterModule, Routes } from '@angular/router';
import { MovementsComponent } from './views/movements/movements.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginModule),
  },
  { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'movements', loadChildren: () => import('./views/demmerda/demmerda.module').then(m => m.DemmerdaModule) },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
