import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardify'
})
export class CardifyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length === 16)
      return `${value.slice(0,4)} ${value.slice(4,8)} ${value.slice(8,12)} ${value.slice(12,16)}`;
    else
      return value
  }

}
