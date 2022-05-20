import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/cards';

@Component({
  selector: 'alb-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [ ]
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
