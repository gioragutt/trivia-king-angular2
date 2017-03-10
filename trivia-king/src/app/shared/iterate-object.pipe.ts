import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateObject'
})
export class IterateObjectPipe implements PipeTransform {
  transform(value: any, args?: any): any {
      if (value === undefined || typeof value !== 'object') {
          return [];
      }

      return Object.keys(value).map((key) => ({ 'key': key, 'value': value[key] }));
  }
}
