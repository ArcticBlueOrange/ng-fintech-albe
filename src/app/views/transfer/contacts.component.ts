import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/cards';

@Component({
  selector: 'alb-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  listpage: boolean = true;
  // todo spostare i contatti su server
  selectedContact: Contact | null = null;
  contacts: Contact[] = [
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

  // public dialogRef: MatDialogRef<ContactsComponent>,
  // @Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor(public dialogRef: MatDialogRef<ContactsComponent>) { }
  ngOnInit(): void { }

  handleNewContact(f: any) {
    // todo change type from any
    // console.log(f);
    if (f["_id"] != undefined) {
      // console.log("Edit:")
      // console.log(this.contacts)
      this.contacts = this.contacts.map(
        c => f["_id"] === c._id ?
          { ...f } :
          c)
    }
    else {
      // console.log("New")
      this.contacts = [
        ...this.contacts,
        { _id: Date().toString(), ...f }
      ];
    }
    this.listpage = true;
    this.selectedContact = null;
  }
  handleSelect(f: any) {
    // todo change type from any
    // console.log(f);
    this.selectedContact = this.contacts.filter(
      c => c._id === f["_id"])[0]
    this.dialogRef.close();
    // emetti evento e cos
  }
  handleEdit(f: any) {
    this.selectedContact = this.contacts.filter(
      c => c._id === f["_id"])[0];
    this.listpage = false;
  }
  handleRemove(f: any) {
    this.contacts = this.contacts.filter(
      c => c._id !== f["_id"])
  }
}
