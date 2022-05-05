import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/cards';

@Component({
  selector: 'alb-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];
  @Output() movimenti = new EventEmitter<string>();
  @Output() cancella = new EventEmitter<string>();
  @Output() aggiungi = new EventEmitter();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/example-cards").subscribe((res) => this.cards = res as Card[]);
  }

  handleMovimenti(cardId: string) {
    console.log("Movimenti...")
    const index = this.cards.findIndex(
      (card) => card._id === cardId)
    console.log(this.cards[index].number)
    this.movimenti.emit(cardId);
  }
  handleRimuovi(cardId: string) {
    console.log("Rimuovi...")
    const index = this.cards.findIndex(
      (card) => card._id === cardId);
    console.log(this.cards[index].number)
    this.cancella.emit(cardId);
  }

}
