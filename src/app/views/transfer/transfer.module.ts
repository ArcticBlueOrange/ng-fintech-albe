import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { TransferComponent } from './transfer.component';
import { ContactFormComponent } from './components/contact-form.component';
import { ContactListComponent } from './components/contact-list.component';
import { ContactsComponent } from './components/contacts.component';

import { TransferRoutingModule } from './transfer-routing.module';

@NgModule({
  declarations: [
    TransferComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    TransferRoutingModule,
  ],
  exports: [
    TransferComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactsComponent,
  ],
})
export class TransferModule { }
