import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control?.parent?.invalid || false;
  }
}

@Component({
  selector: 'alb-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // TODO MOLTO SIMILE AL COMP. SIGN-IN // UNIRE?
  // @ViewChild('f') form: NgForm | null = null;
  registerForm = this.fb.group({
    name:['',[Validators.required]],
    surname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    pass1:['',[Validators.required]],
    pass2:['',[Validators.required]],
  })
  @Output() changeStatus = new EventEmitter<null>();
  pswVisible: boolean = false;
  constructor(private fb:FormBuilder) { }
  get pass1() { return this.registerForm.get('pass1') as FormArray; }
  get pass2() { return this.registerForm.get('pass2') as FormArray; }

  ngOnInit(): void { }

  onSubmit() {
    if (this.registerForm.valid && this.pass1.value === this.pass2.value)
    {
      console.log(`Psw Match`)
      console.log(this.registerForm.value)
    }
    else {
      console.log("Incorrect form")
    }
  }

}
