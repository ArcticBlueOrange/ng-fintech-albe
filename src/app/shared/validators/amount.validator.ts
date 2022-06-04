import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";

export function amountValidator(c: AbstractControl): ValidationErrors | null {
  if (!c.value) {
    return {
      emptyField: "Inserire valore in Euro"
    }
  }
  const v = parseFloat(c.value);
  if (isNaN(v)) {
    return {
      stringfield: `${v} non è un numero`
    }
  }

  if (v < 0) {
    return {
      negativeField: `${v} è negativo`
    }
  }

  return null;
}

// Direttiva (Template-Driven Forms), a sua volta usa la funzione precedente
@Directive({
  selector: "[amountPositive]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: amountValidator
  }]
})
export class AmountValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return amountValidator(control);
  }
}

// Validatore asincrono con dipendenze (Reactive Forms)
// In quest'ultimo caso, la versione per i Template-Driven sarà una
// Direttiva che utilizzerà questo servizio.
// @Injectable({ providedIn: 'root' })
// export class amountValidatorService {
//   constructor(private amountService: amountValidatorService) {}
//   validate(): AsyncValidatorFn {
//     return (...) => {
//       return this.amountService.getValidators.pipe(...);
//     }
//   }
// }

