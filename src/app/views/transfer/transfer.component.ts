import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardsService } from 'src/app/api/cards.service';
import { TransferService } from 'src/app/api/transfer.service';
// import { ContactsService } from 'src/app/api/contacts.service';
import { Card, Contact } from 'src/app/models/cards';
import { amountValidator } from 'src/app/shared/validators/amount.validator';
import { CardIdValidatorService } from 'src/app/shared/validators/card-id.validator';
import { ibanValidator } from 'src/app/shared/validators/iban.validator';
import { TransferValidator } from 'src/app/shared/validators/transfer.validator';
import { ContactsComponent } from './components/contacts.component';

@Component({
  selector: 'alb-transfer',
  templateUrl: './transfer.component.html',
  styles: []
})
export class TransferComponent implements OnInit {
  cards: Card[] = [];
  form = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    iban: ['', [Validators.required, ibanValidator]],
    amount: ['', [Validators.required, amountValidator,]],
    cardId: ['', [Validators.required,],
      [this.cardIdValidator.validate()]
    ],
  },
    { asyncValidators: this.transferValidator.validate(), }
  );

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    // private contactsService: ContactsService,
    private cardsService: CardsService,
    private transferService: TransferService,
    private transferValidator: TransferValidator,
    private cardIdValidator: CardIdValidatorService
  ) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => this.cards = //res
      [
        ...res,
        {
          _id: '-1',
          number: "Carta Invalida",
          amount: -1,
          owner: "Ajeje Brazorf",
          ownerId: "-1",
          type: "visa",
        }
      ]
    );
    // this.contactsService.getContacts().subscribe( res => this.contacts = res);
  }

  onSubmit() {
    console.log(this.form.value);
    this.transferService.send(this.form.value).subscribe(
      res => this.resetForm()
    )
    console.log(this.form.pristine);
  }
  resetForm(): void {
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.setErrors(null);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Closed");
      if (result != null && result != undefined) {
        this.form.patchValue(result);
        console.log(result);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
