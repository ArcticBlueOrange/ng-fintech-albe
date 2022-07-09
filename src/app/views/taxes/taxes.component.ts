import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'alb-taxes',
  templateUrl: './taxes.component.html',
  styles: [
  ]
})
export class TaxesComponent implements OnInit {

  f24Form = this.fb.group({
    cf: ['', [Validators.required]],
    surname: ['', Validators.required],
    name: ['', Validators.required],
    birthday: ['', Validators.required],
    sex: ['', Validators.required],
    prov: ['', Validators.required],
    city: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit() {}

}
