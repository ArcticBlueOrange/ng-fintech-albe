import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";

export function transferValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Valori mancanti"
    }
  }

  //... verificare importo e carta

  return null;
}

// Direttiva (Template-Driven Forms), a sua volta usa la funzione precedente
@Directive({
  selector: "[transferAllowed]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: transferValidator
  }]
 })
export class TransferValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return transferValidator(control);
  }
}

// Validatore asincrono con dipendenze (Reactive Forms)
// In quest'ultimo caso, la versione per i Template-Driven sarà una
// Direttiva che utilizzerà questo servizio.
// @Injectable({ providedIn: 'root' })
// export class transferValidatorService {
//   constructor(private transferService: transferValidatorService) {}
//   validate(): AsyncValidatorFn {
//     return (...) => {
//       return this.transferService.getValidators.pipe(...);
//     }
//   }
// }

