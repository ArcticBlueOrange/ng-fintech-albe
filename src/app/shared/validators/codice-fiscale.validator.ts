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

// Validatore asincrono con dipendenze (Reactive Forms)
// In quest'ultimo caso, la versione per i Template-Driven sarà una
// Direttiva che utilizzerà questo servizio.
// @Injectable({ providedIn: 'root' })
// export class codiceFiscaleValidatorService {
//   constructor(private codiceFiscaleService: codiceFiscaleValidatorService) {}
//   validate(): AsyncValidatorFn {
//     return (...) => {
//       return this.codiceFiscaleService.getValidators.pipe(...);
//     }
//   }
// }

