import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { NgForm } from '@angular/forms';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control?.parent?.invalid || false;
  }
}

@Component({
  selector: 'alb-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [` `]
})
export class SignInComponent implements OnInit {

  // @ViewChild('f') form: NgForm | null = null;
  signInForm = this.fb.group({
    name: ['', [Validators.required]],
    pass: ['', [Validators.required]]
  })
  @Output() changeStatus = new EventEmitter();
  pswVisible: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.signInForm?.valid)
      console.log(this.signInForm?.value)
  }

}
