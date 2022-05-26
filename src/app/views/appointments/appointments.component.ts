import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Location } from 'src/app/models/banks';
import { DayWithSlot, DayWithSlots } from 'src/app/models/slots';
import { AppointmentsService } from 'src/app/api/appointments.service';

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
  banks: Location[] = [];
  days: DayWithSlots[] = [
  ]
  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.appointmentsService.locations().subscribe(
      res => this.banks = res
    )
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
