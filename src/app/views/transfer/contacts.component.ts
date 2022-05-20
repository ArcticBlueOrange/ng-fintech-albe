import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/cards';

@Component({
  selector: 'alb-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contacts : Contact[] = [
    {
      _id: "123",
      name: "pippo",
      surname: "tizio",
      iban: "0123456789",
    },
    {
      _id: "456",
      name: "pluto",
      surname: "caio",
      iban: "9876543210",
    },
    {
      _id: "789",
      name: "paperino",
      surname: "sempronio",
      iban: "0246802468",
    },
  ]

  constructor(
    // public dialogRef: MatDialogRef<ContactsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  ngOnInit(): void {
  }

  onKey(e: any) { console.log(e); }

  //   onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
