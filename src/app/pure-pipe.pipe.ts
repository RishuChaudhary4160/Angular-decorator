import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe'
})
export class PurePipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.map((obj:any)=>obj.upperCase());
  }

}
