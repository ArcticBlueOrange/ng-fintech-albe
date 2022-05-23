import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Location } from 'src/app/models/banks';
import { DayWithSlot, DayWithSlots } from 'src/app/models/slots';

@Component({
  selector: 'alb-appointments',
  templateUrl: './appointments.component.html',
  styles: [
  ]
})
export class AppointmentsComponent implements OnInit {

  // @ViewChild(MatDrawer) drawer!: MatDrawer;
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  bankSelected: Location | null = null;
  banks: Location[] = [
    {
      _id: "123",
      name: "sede 1",
      address: "via tal dei tali 1, Roma",
      coords: [1,1]
    },
    {
      _id: "456",
      name: "sede 2",
      address: "Via dalle palle, 6, Milano",
      coords: [2,2]
    },
  ];
  days: DayWithSlots[] = [
  ]
  constructor() {
    // console.log(this.drawer)
  }
  ngOnInit(): void {
   }

  onSelected(b: Location) {
    this.drawer.open();
    this.bankSelected = b;
  }
  onSelectedTime(d: DayWithSlot) {
    console.log(d);
    this.drawer.close();
  }


}
