import { Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidationErrors, Validators, } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';
// import { debounceTime } from 'rxjs';
// import { map } from 'rxjs/internal/operators/map';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null): boolean {
//     return control?.parent?.invalid || false;
//   }
// }
export const lenValidator =
  (min:number, max: number) =>
    (c: AbstractControl): ValidationErrors | null => {
      if (!c.value) {
        return {
          length: {
            min:min,
            max:max,
          }
        }
      }
      if (c.value.length < min) {
        return {
          length: {
            min: min,
            value: c.value.length - min,
          }
        }
      }
      if (c.value.length > max) {
        return {
          length: {
            max: max,
            value: c.value.length - max,
          }
        }
      }
      return null;

    };

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
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    pass1: ['', [Validators.required, //lenValidator(4,32)
                  ]],
    pass2: ['', [Validators.required, //lenValidator(4,32)
                  ]],
  })
  @Output() changeStatus = new EventEmitter<null>();
  pswVisible: boolean = false;
  constructor(private fb: FormBuilder) {/*console.log("constructor_called");*/ }
  // get pass1() { return this.registerForm.get('pass1') as FormArray; }
  // get pass2() { return this.registerForm.get('pass2') as FormArray; }
  // email$ = this.registerForm.get('email')!.valueChanges.pipe(
  //   debounceTime(200),
  //   map((email) => {
  //     console.log(`Async called for ${email}`)
  //     if (!email) return 'Create user';
  //     return `Creating ${email}...`;
  //   })
  // );

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
