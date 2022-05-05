import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'alb-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [`
  `
  ]
})
export class SignInComponent implements OnInit {

  @ViewChild('f') form: NgForm | null = null;
  @Output() changeStatus = new EventEmitter<null>();
  pswVisible: boolean = false;
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.form?.valid)
      console.log(this.form?.value)
  }

}
