import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from 'src/app/models/banks';

@Component({
  selector: 'alb-address-selector',
  templateUrl: './address-selector.component.html',
  styles: [
  ]
})
export class AddressSelectorComponent implements OnInit {

  @Input() banks: Location[] = [];
  @Output() bankSelected = new EventEmitter<Location>();

  constructor() { }

  ngOnInit(): void { }

  onClick(b: Location) {
    this.bankSelected.emit(b);
  }

}
