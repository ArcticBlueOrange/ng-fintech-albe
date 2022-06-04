import { Directive, Injectable, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";
import { AuthService } from "src/app/api/auth.service";

export function equalFieldsValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Valori mancanti"
    }
  }
  const p1 = c.get('password');
  const p2 = c.get('altrapassword');
  return p1 == p2 ? null : { pswMatch: "le password non corrispondono" }
}

// Direttiva (Template-Driven Forms), a sua volta usa la funzione precedente
@Directive({
  selector: "[passwordMatch]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: equalFieldsValidator
  }]
 })
export class EqualFieldsValidatorDirective implements Validator {
  @Input("passwordMatch") psw = "";

  validate(control: AbstractControl): ValidationErrors | null {
    return equalFieldsValidator(control);
  }
}
