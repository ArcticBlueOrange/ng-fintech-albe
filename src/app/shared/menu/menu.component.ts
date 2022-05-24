import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alb-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items = [
    { name: "home", link: "", icon: "home", },
    { name: "carte", link: "dashboard/cards", icon: "credit_card", },
    { name: "movimenti", link: "dashboard/movements", icon: "receipt_long", },
    { name: "trasferisci", link: "dashboard/transfer", icon: "paid", },
    { name: "appuntamenti", link: "dashboard/appointments", icon: "events", },
    { name: "tasse", link: "", icon: "summarize", },
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
