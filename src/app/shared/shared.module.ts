import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardifyPipe } from './cardify.pipe';
import { FilterPipe } from './filter.pipe';
import { EllipsePipe } from './ellipse.pipe';



@NgModule({
  declarations: [
    CardifyPipe,
    FilterPipe,
    EllipsePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardifyPipe,
    FilterPipe,
    EllipsePipe,
  ]
})
export class SharedModule { }
