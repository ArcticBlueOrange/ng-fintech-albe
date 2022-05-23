import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alb-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items = [
    { name: "home", link: "", icon: "home",  },
    { name: "carte",  link: "cards",icon: "credit_card",  },
    { name: "movimenti",  link: "movements",icon: "receipt_long",  },
    { name: "trasferisci",  link: "transfer",icon: "paid",  },
    { name: "appuntamenti",  link: "appointments",icon: "events",  },
    { name: "tasse",  link: "",icon: "summarize",  },
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
