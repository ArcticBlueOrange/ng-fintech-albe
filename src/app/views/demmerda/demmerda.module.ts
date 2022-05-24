import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemmerdaRoutingModule } from './demmerda-routing.module';
import { DemmerdaComponent } from './demmerda.component';


@NgModule({
  declarations: [
    DemmerdaComponent
  ],
  imports: [
    CommonModule,
    DemmerdaRoutingModule
  ]
})
export class DemmerdaModule { }
