import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MovementsComponent } from './movements.component';
import { MovementComponent } from './components/movement.component';



@NgModule({
  declarations: [
    MovementsComponent,
    MovementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    MovementsComponent,
    MovementComponent,
  ],
})
export class MovementsModule { }
