import { Directive, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { EqualFieldsValidatorDirective } from './equal-fields.validator';
import { AmountValidatorDirective } from './amount.validator';
import { TransferValidatorDirective } from './transfer.validator';
import { IbanValidatorDirective } from './iban.validator';
import { CardIdValidatorDirective } from './card-id.validator';
import { CodiceFiscaleValidatorDirective } from './codice-fiscale.validator';



@NgModule({
  declarations: [
    EqualFieldsValidatorDirective,
    AmountValidatorDirective,
    // TransferValidatorDirective,
    IbanValidatorDirective,
    // CardIdValidatorDirective,
    CodiceFiscaleValidatorDirective,
  ],
  imports: [
    CommonModule,
  ],
})
export class ValidatorsModule {
 }

