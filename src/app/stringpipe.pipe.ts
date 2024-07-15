import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringpipe'
})
export class StringpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value+5;
    return value;
  }

}
