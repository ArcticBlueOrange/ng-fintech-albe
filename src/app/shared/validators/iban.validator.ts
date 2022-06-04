import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";

export function ibanValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Valori mancanti"
    }
  }
  //... verifica la validita dell'iban
  return null;
}

// Direttiva (Template-Driven Forms), a sua volta usa la funzione precedente
@Directive({
  selector: "[validIBAN]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ibanValidator
  }]
 })
export class IbanValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return ibanValidator(control);
  }
}

// Validatore asincrono con dipendenze (Reactive Forms)
// In quest'ultimo caso, la versione per i Template-Driven sarà una
// Direttiva che utilizzerà questo servizio.
// @Injectable({ providedIn: 'root' })
// export class ibanValidatorService {
//   constructor(private ibanService: ibanValidatorService) {}
//   validate(): AsyncValidatorFn {
//     return (...) => {
//       return this.ibanService.getValidators.pipe(...);
//     }
//   }
// }

