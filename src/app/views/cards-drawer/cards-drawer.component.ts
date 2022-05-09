import { FocusMonitor } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/cards';
import { CardFormComponent } from '../card-form/card-form.component';

@Component({
  selector: 'alb-cards-drawer',
  templateUrl: './cards-drawer.component.html',
  styles: []
})
export class CardsDrawerComponent implements OnInit {

  cards: Card[] = [];
  @ViewChild('cardForm', { read: "any" }) form!: CardFormComponent;
  @ViewChild('#', { read: 'any' }) drawer!: MatDrawer;

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/example-cards").subscribe((res) => this.cards = res as Card[]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  handleAggiungi() {
    this.openSnackBar("hooolo", "yolo");
  }

  handleNewCard(form: AbstractControl) {
    console.log("new card form received");
    console.log(form)
    console.log(form.value);
    // TODO RECEIVE NEW CARD DATA FROM SERVER
    let newCard: Card = {
      _id: `${Date.now()}`,
      amount: 0,
      number: form.value.number,
      owner: `${form.value.name} ${form.value.surname}`,
      ownerId: "123",
      type: form.value.type,
    }
    this.cards = [...this.cards, newCard];
    // this.drawer.toggle();
    this.openSnackBar("Card Added", "OK");
  }

}
