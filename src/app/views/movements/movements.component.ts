import { Component, OnInit } from '@angular/core';
// import { /*FormBuilder,*/ NgForm } from '@angular/forms';
import { Card, Movement } from 'src/app/models/cards';

@Component({
  selector: 'alb-movements',
  templateUrl: './movements.component.html',
  styles: [
  ]
})
export class MovementsComponent implements OnInit {

  // form = this.fb.group({ });
  cardSelect: string = 'ALL';
  rowDisp: number = 5;
  cards: Card[] = [
    {
      _id: '123',
      number: '1234567890',
      ownerId: 'brand1',
      owner: 'Marco Bertolini',
      type: 'visa',
      amount: 123,
    },
    {
      _id: '456',
      number: '09876542321',
      ownerId: 'brand1',
      owner: 'Marco Bertolini',
      type: 'mastercard',
      amount: 420,
    },

  ];

  movements: Movement[] = [
    {
      _id: '1',
      amount: 420.69,
      cardId: '123',
      description: `tutto comincio'
      quando un principe nigeriano,
      mio lontano parente,
      mi scrisse che avevo ricevuto una gran
      somma di denaro`,
      timestamp: Date.now(),
      title: 'withdrawal',
      type: 'out',
    },
    {
      _id: '2',
      amount: 69.420,
      cardId: '123',
      description: 'lorem ipsum dolor sit amet, ',
      timestamp: Date.now(),
      title: 'Deposit',
      type: 'in',
    },
    {
      _id: '3',
      amount: 420.69,
      cardId: '456',
      description: `Soldi inviati al principe`,
      timestamp: Date.now(),
      title: 'withdrawal',
      type: 'out',
    },
    {
      _id: '4',
      amount: 69.420,
      cardId: '456',
      description: `Stipendio del mese di maggio`,
      timestamp: Date.now(),
      title: 'Deposit',
      type: 'in',
    },
  ];
  movementsDisp: Movement[] = [];

  constructor(/*private fb: FormBuilder*/) {
    for (let i = 0; i < 100; i++) {
      this.movements.push(
        { ...this.movements[i],
          amount: Math.floor(Math.random() * 100000) / 100
         }
      )
    }
  }
  ngOnInit(): void {
    this.movementsDisp = [...this.movements];
  }


  onSelectCard(_id: any) {
    this.rowDisp = 5;
    this.movementsDisp = this.movements.filter(
      (card) => {
        return card.cardId === _id || _id === 'ALL';
      }
    );
  }

  onMore() {
    this.rowDisp += 5;
  }


}
