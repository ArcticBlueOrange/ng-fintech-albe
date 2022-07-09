import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TaxesRoutingModule } from './taxes-routing.module';
import { TaxesComponent } from './taxes.component';


@NgModule({
  declarations: [
    TaxesComponent,
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class TaxesModule { }
