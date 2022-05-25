import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alb-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items = [
    { name: "home", link: "dashboard", icon: "home", },
    { name: "carte", link: "dashboard/cards", icon: "credit_card", },
    { name: "movimenti", link: "dashboard/movements", icon: "receipt_long", },
    { name: "trasferisci", link: "dashboard/transfer", icon: "paid", },
    { name: "appuntamenti", link: "dashboard/appointments", icon: "events", },
    { name: "tasse", link: "dashboard/taxes", icon: "summarize", },
  ]
  user: string = "Alberto Brandolini"
  constructor(private router: Router) { }

  ngOnInit(): void { }

  onLogOut() {
    console.log(this.user);
    this.router.navigate(['login']);
  }
  onUser() {
    console.log(this.user);
  }

}
