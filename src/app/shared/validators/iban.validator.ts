import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";

// funzione (per reactive forms)
export function ibanValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Valori mancanti"
    }
  }
  //... verifica la validita dell'iban
  // regole per iban internazionali: https://bank.codes/iban/structure/
  // esempio di iban italiano (senza spazi):
  // IT 60 X 0542811101000000123456
  const reg = /^\w{2}\d{2}[\w][\d]{22}$/;
  // console.log(c.value.match(reg));
  return !c.value.match(reg) ? { ibanError: "Iban non valido" } : null;
}
