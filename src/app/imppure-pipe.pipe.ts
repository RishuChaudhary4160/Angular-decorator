import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imppurePipe',
  pure:false
})
export class ImppurePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
