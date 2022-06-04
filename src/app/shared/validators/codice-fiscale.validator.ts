import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";

export function codiceFiscaleValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Valori mancanti"
    }
  }

  //... regex per validare il cf

  return null;
}

// Direttiva (Template-Driven Forms), a sua volta usa la funzione precedente
@Directive({
  selector: "[CfValido]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: codiceFiscaleValidator
  }]
 })
export class CodiceFiscaleValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return codiceFiscaleValidator(control);
  }
}

// TODO

