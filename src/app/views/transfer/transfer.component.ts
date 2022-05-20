import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Card, Contact } from 'src/app/models/cards';
import { ContactsComponent } from './contacts.component';

@Component({
  selector: 'alb-transfer',
  templateUrl: './transfer.component.html',
  styles: []
})
export class TransferComponent implements OnInit {
  cards: Card[] = [];
  contacts: Contact[] = [];
  form = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    iban: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    cardId: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private http: HttpClient,
    public dialog: MatDialog) { }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/example-cards').subscribe(
      (res) => this.cards = res as Card[]);
    const dialogRef = this.dialog.open(ContactsComponent)
  }

  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      height: '1400px',
      width: '600px',
    })
  }


}
