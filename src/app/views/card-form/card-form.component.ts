import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'alb-card-form',
  templateUrl: './card-form.component.html',
  styles: [
  ]
})
export class CardFormComponent implements OnInit {

  f!: NgForm;
  typeControl = new FormControl('', [Validators.required]);
  cardTypes = [
    { 'name': 'mastercard', 'codeReg': /\d{16}/, 'pinReg': /\d{3}/, },
    { 'name': 'visa', 'codeReg': /\d{16}/, 'pinReg': /\d{3}/, },
  ];
  // matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.f.value)
  }

  handleAnnulla() {
    console.log("Annulla");
    console.log(this.f.value)
    this.f.reset();
  }

}
