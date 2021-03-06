import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/cards';

@Component({
  selector: 'alb-card-list',
  templateUrl: './card-list.component.html',
  styles: []
})
export class CardListComponent implements OnInit {

  @Input() cards: Card[] = [];
  @Output() movimenti = new EventEmitter<string>();
  @Output() cancella = new EventEmitter<string>();
  @Output() aggiungi = new EventEmitter();

  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

}
