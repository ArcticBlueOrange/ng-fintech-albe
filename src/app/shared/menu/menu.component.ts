import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alb-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items = [
    { name: "home", icon: "home" },
    { name: "carte", icon: "credit_card" },
    { name: "movimenti", icon: "receipt_long" },
    { name: "trasferisci", icon: "paid" },
    { name: "appuntamenti", icon: "events" },
    { name: "tasse", icon: "summarize" },
  ]
  user: string = "Alberto Brandolini"
  constructor() { }

  ngOnInit(): void { }

  onLogOut() {
    console.log(this.user);
  }
  onUser() {
    console.log(this.user);
  }

}
