import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'alb-register-component',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // TODO MOLTO SIMILE AL COMP. SIGN-IN
  // UNIRE?
  @ViewChild('f') form: NgForm | null = null;
  @Output() changeStatus = new EventEmitter<null>();
  pswVisible: boolean = false;
  psw: string = '';
  psw2: string = '';
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.form?.valid && this.psw === this.psw2)
    {
      console.log(`Psw Match`)
      console.log(this.form?.value)
    }
  }

}
