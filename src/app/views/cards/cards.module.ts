import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardsComponent } from './cards.component';
import { CardFormComponent } from './components/card-form.component'
import { CardListComponent } from './components/card-list.component';
import { CardsRoutingModule } from './cards-routing.module';

import { CardsService } from 'src/app/api/cards.service';

@NgModule({
  declarations: [
    CardsComponent,
    CardFormComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    CardsRoutingModule,
  ],
  providers: [
    CardsService,
  ]
})
export class CardsModule { }
