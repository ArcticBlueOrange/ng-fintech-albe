import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardsService } from 'src/app/api/cards.service';
import { TransferService } from 'src/app/api/transfer.service';
// import { ContactsService } from 'src/app/api/contacts.service';
import { Card, Contact } from 'src/app/models/cards';
import { ContactsComponent } from './components/contacts.component';

@Component({
  selector: 'alb-transfer',
  templateUrl: './transfer.component.html',
  styles: []
})
export class TransferComponent implements OnInit {
  cards: Card[] = [];
  // contacts: Contact[] = [
  // {
  //   _id: "123",
  //   name: "pippo",
  //   surname: "tizio",
  //   iban: "0123456789",
  // },
  // {
  //   _id: "456",
  //   name: "pluto",
  //   surname: "caio",
  //   iban: "9876543210",
  // },
  // {
  //   _id: "789",
  //   name: "paperino",
  //   surname: "sempronio",
  //   iban: "0246802468",
  // },
  // ];
  form = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    iban: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    cardId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    // private contactsService: ContactsService,
    private cardsService: CardsService,
    private transferService: TransferService,
  ) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => this.cards = res);
    // this.contactsService.getContacts().subscribe( res => this.contacts = res);
  }

  onSubmit() {
    console.log(this.form.value);
    this.transferService.send(this.form.value).subscribe(
      res => this.form.reset()
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      // height: '1400px',
      width: '600px',
      // data: this.contacts
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Closed");
      if (result != null && result != undefined) {
        this.form.patchValue(result);
        console.log(result);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
