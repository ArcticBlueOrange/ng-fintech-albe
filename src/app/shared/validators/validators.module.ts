import { Directive, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
// import { EqualFieldsValidatorDirective } from './equal-fields.validator';
import { AmountValidatorDirective } from './amount.validator';
// import { TransferValidatorDirective } from './transfer.validator';
// import { IbanValidatorDirective } from './iban.validator';
// import { CardIdValidatorDirective } from './card-id.validator';
// import { CodiceFiscaleValidatorDirective } from './codice-fiscale.validator';



// credo di aver usato ovunque i reactive forms, quindi userò poco o niente questo modulo in realtà
@NgModule({
  declarations: [
    // EqualFieldsValidatorDirective,
    // AmountValidatorDirective,
    // IbanValidatorDirective,
    // TransferValidatorDirective,
    // CardIdValidatorDirective,
    // CodiceFiscaleValidatorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    // EqualFieldsValidatorDirective,
    // AmountValidatorDirective,
    // IbanValidatorDirective,
    // TransferValidatorDirective,
    // CardIdValidatorDirective,
    // CodiceFiscaleValidatorDirective,
  ]
})
export class ValidatorsModule {
 }

