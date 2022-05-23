import { Component, Input, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/cards';

@Component({
  selector: 'alb-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  openPanel: boolean = false;
  // @Input() mov!: Movement;
  @Input() dateLong: string | null = null;
  @Input() dateShort: string | null = null;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() amount: number = 0;
  @Input() cardId: string = '';
  @Input() type: string = '';


  constructor() { }
  ngOnInit(): void { }

}
