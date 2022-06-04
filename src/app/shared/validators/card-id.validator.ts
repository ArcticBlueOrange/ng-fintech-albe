import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";

export function cardIdValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Valori mancanti"
    }
  }

  //... controlla che la carta sia presente sul server

  return null;
}

// Direttiva (Template-Driven Forms), a sua volta usa la funzione precedente
@Directive({
  selector: "[cardIDPresent]",
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: cardIdValidator
  }]
 })
export class CardIdValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return cardIdValidator(control);
  }
}

// Validatore asincrono con dipendenze (Reactive Forms)
// In quest'ultimo caso, la versione per i Template-Driven sarà una
// Direttiva che utilizzerà questo servizio.
// @Injectable({ providedIn: 'root' })
// export class cardIdValidatorService {
//   constructor(private cardIdService: cardIdValidatorService) {}
//   validate(): AsyncValidatorFn {
//     return (...) => {
//       return this.cardIdService.getValidators.pipe(...);
//     }
//   }
// }

