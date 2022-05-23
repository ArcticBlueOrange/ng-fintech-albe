import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';
import { SignInComponent } from './components/sign-in.component';
import { RegisterComponent } from './components/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    SignInComponent,
    RegisterComponent,
  ]
})
export class LoginModule { }
