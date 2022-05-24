import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginModule } from './views/login/login.module';
// import { CardsModule } from './views/cards/cards.module';
// import { AppointmentsModule } from './views/appointments/appointments.module';
// import { TransferModule } from './views/transfer/transfer.module';
import { MovementsModule } from './views/movements/movements.module';
import { DashboardModule } from './views/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    // CoreModule
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    // CardsModule,
    // AppointmentsModule,
    // TransferModule,
    MovementsModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
