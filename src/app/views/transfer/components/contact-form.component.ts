import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/cards';

@Component({
  selector: 'alb-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {

  @Output() undo = new EventEmitter();
  @Output() addcontact = new EventEmitter<FormData>();
  @Input() template: Contact | null = null;
  form = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    iban: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    if (this.template) {
      this.form.patchValue({
        ...this.template
      })
    }
  }

  onSubmit() {
    this.addcontact.emit(
      {
        _id: this.template?._id,
        ...this.form.value
      }
    );
  }

}
