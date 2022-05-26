import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, fields: string[]): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    //   return items.filter(item => {
    //     (item[fields] as string).toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    // })
    return items.filter(item => {
      // Object.keys(this).some(
      //   (key) => (item[key] as string).toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      // )
      for (let field of fields) {
        if ((item[field] as string).toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
          return true;
      }
      return false;
      // (item[fields] as string).toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    })
  }

}
