import { ComponentFactoryResolver, Directive, Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, AsyncValidatorFn, NG_VALIDATORS } from "@angular/forms";
import { from, Observable, of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { CardsService } from "src/app/api/cards.service";

// validatore asincrono che prende il servizio
@Injectable({ providedIn: 'root' })
export class TransferValidator {
  constructor(private cardsService: CardsService) { }

  validate(): AsyncValidatorFn {
    return (c: AbstractControl): Observable<ValidationErrors | null> => {
      return this.cardsService.getCards().pipe(
        mergeMap(cardsWithMovements => from(cardsWithMovements)),
        filter(card => card._id === c.get('cardId')?.value),
        map(card => card.amount < c.get('amount')?.value ? { outOfMoney: "Non abbastanza denaro sulla carta" } : null),
        catchError(() => of(null)),
      );
    }
  }
}
