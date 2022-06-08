import { FocusMonitor } from '@angular/cdk/a11y';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CardsService } from 'src/app/api/cards.service';
import { Card } from 'src/app/models/cards';
import { CardFormComponent } from './components/card-form.component';

@Component({
  selector: 'alb-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  cards$ = new BehaviorSubject<Card[]>([]);
  @ViewChild('cardForm', { read: "any" }) form!: CardFormComponent;

  constructor(private cardsService: CardsService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((val) => this.cards$.next(val));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  handleNewCard(form: AbstractControl) {
    const newCard = this.cardsService.addCard(form.value).subscribe((r) => {
      this.cards$.next([
        ...this.cards$.value,
        {
          _id: r._id,
          amount: r.amount,
          number: r.number,
          owner: r.owner,
          ownerId: r.ownerId,
          type: r.type,

        }
      ]
      );
    })
    this.openSnackBar("Card Added", "OK");
  }

  handleDelete(cardId: string) {
    this.cardsService.delCard(cardId).subscribe(
      r => {
        if (r) this.cards$.next(
          this.cards$.value.filter((c) => c._id != cardId)
        )
      }
    )
  }

  handleMovements(cardId: string) {
    this.router.navigate([`/dashboard/movements/${cardId}`]);
  }

}
