import { Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { catchError, defaultIfEmpty, delay, filter, from, map, mergeMap, of, skip, skipUntil, tap } from "rxjs";
import { CardsService } from "src/app/api/cards.service";

// Validatore asincrono con dipendenze (Reactive Forms)
// In quest'ultimo caso, la versione per i Template-Driven sarà una
// Direttiva che utilizzerà questo servizio.
@Injectable({ providedIn: 'root' })
export class CardIdValidatorService {
  constructor(private cardService: CardsService) { }
  validate(): AsyncValidatorFn {
    return (c: AbstractControl) => {
      return this.cardService.getCards().pipe(
        mergeMap(cardsWithMovements =>
          from(cardsWithMovements).pipe(
            filter(card => card._id === c.value),
            tap(console.log),
          ),
        ),
        defaultIfEmpty(42), // null mi creava problemi, 42 mi sembra una buona risposta :D
        map(card => card === 42 ? { noCard : true } : null),
        tap(console.log),
      )
    }
  }
}

