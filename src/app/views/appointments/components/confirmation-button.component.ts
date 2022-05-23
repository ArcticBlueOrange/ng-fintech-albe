import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DayWithSlot } from 'src/app/models/slots';
import { Location } from 'src/app/models/banks';

@Component({
  selector: 'alb-confirmation-button',
  templateUrl: './confirmation-button.component.html',
  styles: [
  ]
})
export class ConfirmationButtonComponent implements OnInit {

  // @Input() bank: Location | null = null;
  // @Input() date: DayWithSlot | null = null;
  @Output() confirm = new EventEmitter();
  // @Output() undo = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<ConfirmationButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      bank: Location,
      date: DayWithSlot,
    }
  ) { }

  ngOnInit(): void {
    console.log(this.data.date)
   }

  onNoClick(): void {
    // this.undo.emit();
    this.dialogRef.close();
  }

  // onConfirm() {
  //   // this.confirm.emit();
  //   this.dialogRef.close();
  // }

}
