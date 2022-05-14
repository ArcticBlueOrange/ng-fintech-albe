import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movement } from 'src/app/models/cards';

@Component({
  selector: 'alb-movements',
  templateUrl: './movements.component.html',
  styles: [
  ]
})
export class MovementsComponent implements OnInit {

  // form = this.fb.group({ });
  movements: Movement[] = [
    {
      _id: '1',
      amount: 420.69,
      cardId: '123',
      description: 'deposit',
      timestamp: Date.now(),
      title: 'withdrawal',
      type: 'out',
    },
    {
      _id: '2',
      amount: 69.420,
      cardId: '123',
      description: 'Withdrawal',
      timestamp: Date.now(),
      title: 'Deposit',
      type: 'in',
    },
  ];
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }

  onSubmit() {
    // console.log(this.form);
    console.log("gg");
  }


}
