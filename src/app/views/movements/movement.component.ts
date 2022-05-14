import { Component, Input, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/cards';

@Component({
  selector: 'alb-movement',
  templateUrl: './movement.component.html',
  styles: [ ]
})
export class MovementComponent implements OnInit {

  @Input() mov!: Movement;

  constructor() { }
  ngOnInit(): void { }

}
