import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/api/cards.service';
import { Card, CardWithMovements, Movement } from 'src/app/models/cards';

@Component({
  selector: 'alb-movements',
  templateUrl: './movements.component.html',
  styles: [
  ]
})
export class MovementsComponent implements OnInit {

  // form = this.fb.group({ });
  rowDisp: number = 5;
  rowLimit: number = 0;
  cards: CardWithMovements[] = [];
  cardSelect: CardWithMovements | null = null;
  movementsDisp: Movement[] = [];

  constructor(private cardsService: CardsService) {
  }
  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => this.cards = res);
    // this.movementsDisp = [...this.movements];
  }

  onSelectCard(_id: any) {
    this.rowDisp = 5;
    this.cardSelect = this.cards.filter(c => c._id === _id)[0];
    if (_id != 'ALL') {
      this.cardsService.getMovements(_id).subscribe(
        res => {
          // console.log(res);
          this.movementsDisp = res.data;
          this.rowLimit = res.total;
        }
      );
    }
    // this.movementsDisp = this.movements.filter(
    //   (card) => {
    //     return card.cardId === _id || _id === 'ALL';
    //   }
    // );
  }

  onMore() {
    // console.log(this.rowLimit)
    if (this.cardSelect) {
      this.cardsService.getMovements(this.cardSelect?._id, 5, this.rowDisp).subscribe(
        res => {
          // console.log(res.data);
          this.movementsDisp = [...this.movementsDisp, ...res.data];
          this.rowDisp = Math.min(this.rowDisp + 5, res.total);
        });
    }
    // console.log(this.movementsDisp);
  }

}
