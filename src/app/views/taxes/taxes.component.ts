import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'alb-taxes',
  templateUrl: './taxes.component.html',
  styles: [
  ]
})
export class TaxesComponent implements OnInit {

  f24Form = this.fb.group({
    'contribuente': this.fb.group({
      cf: ['', [Validators.required]],
      surname: ['', Validators.required],
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      sex: ['', Validators.required],
      prov: ['', Validators.required],
      city: ['', Validators.required],
    }),
    'erario': this.fb.array([]),
    'inps': this.fb.array([]),
  });

  // get contribuente() { return this.f24Form.controls['contribuente'] as FormGroup; }
  get erario() { return this.f24Form.controls['erario'] as FormArray; }
  get inps() { return this.f24Form.controls['inps'] as FormArray; }

  inpsForm() {
    return this.fb.group({
      idSede: ['', Validators.required],
      causale: ['', Validators.required],
      idInps: ['', Validators.required],
      da: ['', Validators.required],
      a: ['', Validators.required],
      credito: ['',],
      debito: ['',],
    })
  };

  addInpsForm() { this.inps.push(this.inpsForm()); };

  erarioForm() {
    return this.fb.group({
      codice: ['', Validators.required],
      anno: ['', Validators.required],
      debito: ['',],
      credito: ['',],
    })
  };

  addErarioForm() { this.erario.push(this.erarioForm()); };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.f24Form.value);
  }

}
