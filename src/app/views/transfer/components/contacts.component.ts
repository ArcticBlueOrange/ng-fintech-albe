// import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from 'src/app/api/contacts.service';
import { Contact } from 'src/app/models/cards';

@Component({
  selector: 'alb-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {
  // todo dialog closes on external clicks
  listpage: boolean = true;
  selectedContact: Contact | null = null;
  // TODO ADD AS INPUT instead to avoid multiple reload
  contacts: Contact[] = [];

  constructor(public dialogRef: MatDialogRef<ContactsComponent>,
    private contactsService: ContactsService) { }
  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(
      res => this.contacts = res.sort((a, b) => a.surname.localeCompare(b.surname)))
  }

  handleNewContact(f: any) {
    if (f["_id"] != undefined) { // edit
      this.contactsService.editContact(f).subscribe(
        res => this.contacts = this.contacts.map(
          c => f["_id"] === c._id ?
            { ...f } :
            c).sort((a, b) => a.surname.localeCompare(b.surname))
      )
    } else { // new
      this.contactsService.addContact(f).subscribe(
        res => this.contacts = [...this.contacts, res]
          .sort((a, b) => a.surname.localeCompare(b.surname))
      )
    }
    this.listpage = true;
    this.selectedContact = null;
  }

  handleSelect(f: any) {
    // todo change type from any
    this.selectedContact = this.contacts.filter(
      c => c._id === f["_id"])[0]
    this.dialogRef.close();
  }

  handleEdit(f: any) { // move to edit page
    this.selectedContact = this.contacts.filter(
      c => c._id === f["_id"])[0];
    this.listpage = false;
  }

  handleRemove(f: any) {
    this.contactsService.delContact(f._id).subscribe(
      res => this.contacts = this.contacts.filter(
        c => c._id !== f["_id"])
    )
  }
}
