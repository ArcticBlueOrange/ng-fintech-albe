import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Location } from 'src/app/models/banks';
import { DayWithSlot, DayWithSlots } from 'src/app/models/slots';

@Component({
  selector: 'alb-date-selector',
  templateUrl: './date-selector.component.html',
  styles: [
  ]
})
export class DateSelectorComponent implements OnInit {

  // come todo collegarsi all'interface direttamente?
  times: number[] = [8, 9, 10, 11, 12, 14, 15, 16, 17];
  @Input() bankSelected: Location | null = null;
  @Output() selectedTime = new EventEmitter<DayWithSlot>();

  form = this.fb.group({
    day: ['', Validators.required],
    time: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }


  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  // }

  dateFilter = (d: Date | null): boolean => {
    // prevent selecting previous days
    if (d) {
      if (d.getTime() < Date.now()
      )
        return false;
    }
    // Prevent Saturday and Sunday from being selected.
    const day = d?.getDay();
    return day !== 0 && day !== 6
    // && Math.random() > .4;
    // ^^ random variance to simulate vacancy
  }

  onSubmit() {
    console.log(this.form.value);
    this.selectedTime.emit({
      day: this.dateToString(this.form.value.day),
      slots: this.form.value.time[0] as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
    })
    // show popup to confirm

    // close the drawer
  }

  dateToString(d: Date) {
    console.log(d)
    try {
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      let year = d.getFullYear();

      return `${day}/${month}/${year}`;
    } catch (e) {
      return d.toString();
    }
  }



  // onChange(e: any) {
  //   console.log(e)
  // }

}
