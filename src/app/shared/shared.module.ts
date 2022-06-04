import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardifyPipe } from './cardify.pipe';
import { FilterPipe } from './filter.pipe';
import { EllipsePipe } from './ellipse.pipe';
import { ValidatorsModule } from './validators/validators.module';



@NgModule({
  declarations: [
    CardifyPipe,
    FilterPipe,
    EllipsePipe,
  ],
  imports: [
    CommonModule,
    ValidatorsModule,
  ],
  exports: [
    CardifyPipe,
    FilterPipe,
    EllipsePipe,
  ]
})
export class SharedModule { }
