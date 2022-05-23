import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  // FormsModule,
} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { CardListComponent } from './shared/card/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './views/card-form/card-form.component';
import { CardsDrawerComponent } from './views/cards-drawer/cards-drawer.component';
import { MovementComponent } from './views/movements/movement.component';
import { MovementsComponent } from './views/movements/movements.component';
import { EllipsePipe } from './shared/ellipse.pipe';
import { CardifyPipe } from './shared/cardify.pipe';
import { TransferComponent } from './views/transfer/transfer.component';
import { ContactsComponent } from './views/transfer/contacts.component';
import { ContactListComponent } from './views/transfer/contact-list.component';
import { FilterPipe } from './shared/filter.pipe';
import { ContactFormComponent } from './views/transfer/contact-form.component';
import { AppointmentsComponent } from './views/appointments/appointments.component';
import { AddressSelectorComponent } from './views/appointments/address-selector.component';
import { DateSelectorComponent } from './views/appointments/date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LoginComponent,
    CardListComponent,
    CardFormComponent,
    CardsDrawerComponent,
    MovementComponent,
    MovementsComponent,
    EllipsePipe,
    CardifyPipe,
    TransferComponent,
    ContactsComponent,
    ContactListComponent,
    FilterPipe,
    ContactFormComponent,
    AppointmentsComponent,
    AddressSelectorComponent,
    DateSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
