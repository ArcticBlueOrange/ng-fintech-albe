import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CardForm } from 'src/app/models/cards';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control?.parent?.invalid || false;
  }

}

@Component({
  selector: 'alb-card-form',
  templateUrl: './card-form.component.html',
  styles: [
  ]
})
export class CardFormComponent implements OnInit {

  // @ViewChild('f') form: NgForm | null = null;
  @Output() annullaForm = new EventEmitter<null>();
  @Output() cardFormEmit = new EventEmitter<CardForm>();
  cardForm = this.fb.group({
    type: ['', [Validators.required, Validators.pattern(/visa|mastercard/)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    number: ['', [Validators.required,
    Validators.minLength(16), Validators.maxLength(16),]],
    pin: ['', [
      Validators.required,
      Validators.minLength(3), Validators.maxLength(3),]],
  })
  matcher = new MyErrorStateMatcher();
  cardTypes = ['mastercard', 'visa',];
  // get type() { return this.cardForm.get('type') as FormArray; }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }
  public cleanup() { }

  // Esempio
  // @ViewChild('ilTuoSelettore', { read: ??? }) form!: ???;
  // Scopri cosa inserire al posto dei ??? e usa un metodo di questa proprietà per pulire il form nel metodo cleanup!

  onSubmit() {
    // console.log(this.cardForm)
    // this.cardFormEmit.emit(...this.cardForm.value);
    console.log("Submit");
    if (this.cardForm.invalid)
    {
      console.log("Invalid");
      return;
    }
    console.log(this.cardForm.value);
  }

  handleAnnulla() {
    console.log("Annulla");
    this.cardForm.reset();
  }


}
