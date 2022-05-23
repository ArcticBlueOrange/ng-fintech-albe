import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { latLng, tileLayer } from 'leaflet';
import { Location } from 'src/app/models/banks';
import { DayWithSlot, DayWithSlots } from 'src/app/models/slots';
import { ConfirmationButtonComponent } from './confirmation-button.component';

@Component({
  selector: 'alb-date-selector',
  templateUrl: './date-selector.component.html',
})
export class DateSelectorComponent implements OnInit {
  @Input() bankSelected: Location | null = null;
  @Output() selectedTime = new EventEmitter<DayWithSlot>();
  mapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  daysWithSlots: DayWithSlots[] = [
    {
      day: '05/31/2022',
      slots: [8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 21,],
    },
    {
      day: '06/01/2022',
      slots: [9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,],
    },
    {
      day: '06/02/2022',
      slots: [8, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,],
    },

  ];
  days: Date[] = [];

  form = this.fb.group({
    day: ['', Validators.required],
    time: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    // request days
    this.days = this.daysWithSlots.map(d => new Date(d.day));
    // console.log(this.days);
  }

  dateFilter = (d: Date | null): boolean => {
    if (d) {
      return this.days.findIndex(
        valid_date => d.getTime() === valid_date.getTime()
      ) > -1;
    }
    return false;
  }

  timeFilter = (date: Date) => {
    const d = this.dateToString(date, 'us')
    const i = this.daysWithSlots.findIndex(
      day => day.day === d)
    // TODO CALLED TOO MANY TIMES
    // console.log(d)
    // console.log(i)
    // buggy
    if (i < 0) return [];
    return this.daysWithSlots[i].slots;

  }

  openDialog() {
    console.log(this.form.value);
    const dialogRef = this.dialog.open(ConfirmationButtonComponent, {
      width: '600px',
      data: {
        bank: this.bankSelected,
        date: this.form.value,
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      // console.log(res)
      if (res)
        this.onSubmit();
      this.form.reset();
      // this.
    });
  }

  onSubmit() {
    console.log("Appointment confirmed");
    console.log(this.form.value);
    this.selectedTime.emit({
      day: this.dateToString(this.form.value.day, 'eu'),
      slots: this.form.value.time[0] as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
    })
    // show popup to confirm
    // close the drawer and reset form
    // this.form.reset();
  }

  dateToString(d: Date, locale: 'eu' | 'us') {
    // console.log(d)
    try {
      let month = this.leftPad(d.getMonth() + 1)
      let day = this.leftPad(d.getDate())
      let year = this.leftPad(d.getFullYear());
      if (locale === 'us')
        return `${month}/${day}/${year}`;
      else return `${day}/${month}/${year}`;
    } catch (e) {
      console.log("Dato: " + d);
      return "" + d;
    }
  }

  leftPad(n: number, d: number = 2) {
    // console.log("Dato: " + n);
    let o = n.toString();
    const l = o.length;
    if (l >= d) return o;
    return '0'.repeat(d - l) + o;
  }
}
