import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SignInComponent } from './views/login/components/sign-in.component';
import { RegisterComponent } from './views/login/components/register.component';
import { LoginComponent } from './views/login/login.component';
import { CardListComponent } from './views/cards/components/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './views/cards/components/card-form.component';
import { CardsDrawerComponent } from './views/cards/cards-drawer.component';
import { MovementComponent } from './views/movements/components/movement.component';
import { MovementsComponent } from './views/movements/movements.component';
import { EllipsePipe } from './shared/ellipse.pipe';
import { CardifyPipe } from './shared/cardify.pipe';
import { TransferComponent } from './views/transfer/transfer.component';
import { ContactsComponent } from './views/transfer/components/contacts.component';
import { ContactListComponent } from './views/transfer/components/contact-list.component';
import { FilterPipe } from './shared/filter.pipe';
import { ContactFormComponent } from './views/transfer/components/contact-form.component';
import { AppointmentsComponent } from './views/appointments/appointments.component';
import { AddressSelectorComponent } from './views/appointments/components/address-selector.component';
import { DateSelectorComponent } from './views/appointments/components/date-selector.component';
import { ConfirmationButtonComponent } from './views/appointments/components/confirmation-button.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MenuComponent } from './shared/menu/menu.component';

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
    ConfirmationButtonComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    LeafletModule,//.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
