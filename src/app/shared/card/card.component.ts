import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cards';

@Component({
  selector: 'alb-card-component',
  templateUrl: './card.component.html',
  styles: [ ]
})
export class CardComponent implements OnInit {

  card: Card | null = null;
  constructor() { }

  ngOnInit(): void { }

}
