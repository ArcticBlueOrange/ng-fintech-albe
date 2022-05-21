import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/cards';

@Component({
  selector: 'alb-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [ ]
})
export class ContactListComponent implements OnInit {

  @Output() newContact = new EventEmitter();
  @Output() selectContact = new EventEmitter<Contact>();
  @Output() editContact = new EventEmitter<Contact>();
  @Output() removeContact = new EventEmitter<Contact>();
  @Input() contacts: Contact[] = [];

  constructor(
  ) {}
    // public dialogRef: MatDialogRef<ContactListComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData

  ngOnInit(): void {}

}
