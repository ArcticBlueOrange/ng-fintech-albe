import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SignInComponentComponent } from './views/sign-in-component/sign-in-component.component';
import { RegisterComponentComponent } from './views/register-component/register-component.component';
import { LoginComponentComponent } from './views/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponentComponent,
    RegisterComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
