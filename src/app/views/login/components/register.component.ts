import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidationErrors, Validators, } from '@angular/forms';
import { equalFieldsValidator } from 'src/app/shared/validators/equal-fields.validator';
import { ValidatorsModule } from 'src/app/shared/validators/validators.module';


@Component({
  selector: 'alb-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass1: ['', [Validators.required, Validators.minLength(10)
    ]],
    pass2: ['', [Validators.required,
    ]],
  }, { validators: equalFieldsValidator });

  @Output() changeStatus = new EventEmitter<null>();
  pswVisible: boolean = false;
  constructor(private fb: FormBuilder) {/*console.log("constructor_called");*/ }

  ngOnInit(): void { }

  onSubmit() {
    if (this.registerForm.valid //&& this.pass1.value === this.pass2.value
    ) {
      console.log(`Psw Match`)
      console.log(this.registerForm.value)
      console.log(this.registerForm);
    }
    else {
      console.log("Incorrect form")
      console.log(this.registerForm.value)
      console.log(this.registerForm);
      console.log("errors: " + this.registerForm.errors);
    }
  }

}
