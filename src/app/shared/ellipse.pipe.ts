import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse'
})
export class EllipsePipe implements PipeTransform {

  transform(value: any, len: number): string {
    let v = value.toString()
    if (v.length <=  len)
      return v;
    return `${v.substring(0,len)}...`
  }

}
