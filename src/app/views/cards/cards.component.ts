import { FocusMonitor } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardsService } from 'src/app/api/cards.service';
import { Card } from 'src/app/models/cards';
import { CardifyPipe } from 'src/app/shared/cardify.pipe';
import { CardFormComponent } from './components/card-form.component';

@Component({
  selector: 'alb-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  @ViewChild('cardForm', { read: "any" }) form!: CardFormComponent;
  @ViewChild('#', { read: 'any' }) drawer!: MatDrawer;

  constructor(private cardsService: CardsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((res) => this.cards = res)
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  handleNewCard(form: AbstractControl) {
    // TODO RECEIVE NEW CARD DATA FROM SERVER
    const newCard = this.cardsService.addCard(form.value).subscribe((r) => {
      this.cards = [
        ...this.cards,
        {
          _id: r._id,
          amount: r.amount,
          number: r.number,
          owner: r.owner,
          ownerId: r.ownerId,
          type: r.type,
        }]
    })
    this.openSnackBar("Card Added", "OK");
  }

  handleDelete(cardId: string) {
    this.cardsService.delCard(cardId).subscribe(
      r => {
        console.log("'" + r);
        console.log((this.cards))
        console.log((cardId))
        console.log("'" + r);
        if (r) this.cards = this.cards.filter(
          (c) => {
            console.log(`${cardId}=${c._id} -> ${cardId === c._id}`)
            return c._id != cardId;
          });
      }
    )
  }

}
