import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    // if (searchText === 'c') {
    //   return items.filter((c, i) =>
    //   {
    //     // return i % 2 != 0;
    //     return c[fieldName] === 'pippo';
    //   })
    // }
    return items.filter(item => {
      // return searchText.toLowerCase().indexOf((item[fieldName] as string).toLowerCase()) >= 0;
      // return searchText.toLowerCase().indexOf((item[fieldName] as string).toLowerCase()) >= 0;
      return (item[fieldName] as string).toLowerCase().indexOf(searchText.toLowerCase()) >= 0;


    })
  }

}
