import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemmerdaComponent } from './demmerda.component';

const routes: Routes = [{ path: '', component: DemmerdaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemmerdaRoutingModule { }
