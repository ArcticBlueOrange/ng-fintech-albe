import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, first, last, map, Observable, scan, switchMap, tap } from 'rxjs';
import { CardsService } from 'src/app/api/cards.service';
import { Card, CardWithMovements, Movement } from 'src/app/models/cards';

@Component({
  selector: 'alb-movements',
  templateUrl: './movements.component.html',
  styles: [
  ]
})
export class MovementsComponent implements OnInit {

  cards$ = new BehaviorSubject<Card[]>([]);
  selectedCardId$ = new BehaviorSubject<string>('');
  cardSelect$ = combineLatest([this.cards$, this.selectedCardId$]).pipe(
    map(([cards, selectedCardId]) => cards.filter(card => card._id === selectedCardId)[0]),
  )
  total$ = new BehaviorSubject<number>(0);
  rows$ = new BehaviorSubject<number>(5);
  movements$ = new BehaviorSubject<Movement[]>([]);
  // shouldLoadMore$ = new BehaviorSubject<boolean>(false);

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => this.cards$.next(res));
    this.selectedCardId$.subscribe(
      _id => {
        if (_id && _id != 'ALL')
          this.cardsService.getMovements(_id).subscribe(
            res => {
              this.movements$.next(res.data);
              this.total$.next(res.total);
            }
          );
        this.rows$.next(5);
      }
    );
  }

  onMore() {
    if (this.selectedCardId$.value) {
      this.cardsService.getMovements(this.selectedCardId$.value, 5, this.rows$.value).subscribe(
        res => {
          console.log(res)
          this.movements$.next(
            [...this.movements$.value, ...res.data]
          );
          this.rows$.next(Math.min(this.rows$.value + 5, res.total));
        });
    }
  }

}
