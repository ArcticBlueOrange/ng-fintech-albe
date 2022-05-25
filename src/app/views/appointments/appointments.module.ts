import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppointmentsComponent } from './appointments.component';
import { AddressSelectorComponent } from './components/address-selector.component';
import { ConfirmationButtonComponent } from './components/confirmation-button.component';
import { DateSelectorComponent } from './components/date-selector.component';

import { AppointmentsRoutingModule } from './appointments-routing.module';

@NgModule({
  declarations: [
    AppointmentsComponent,
    AddressSelectorComponent,
    ConfirmationButtonComponent,
    DateSelectorComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    LeafletModule,
    AppointmentsRoutingModule,
  ],
  exports: [
    AppointmentsComponent,
    AddressSelectorComponent,
    ConfirmationButtonComponent,
    DateSelectorComponent,
  ]
})
export class AppointmentsModule { }
