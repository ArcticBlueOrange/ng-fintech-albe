import { Directive, Injectable, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS, ValidatorFn } from "@angular/forms";
import { AuthService } from "src/app/api/auth.service";

export const equalFieldsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass1 = control.get('pass1')?.value;
  const pass2 = control.get('pass2')?.value;

  if ( (pass1 != pass2) && pass1 && pass2) {
    return {
      equalFields: "Password non corrispondono"
    }
  }
  return null;
};
