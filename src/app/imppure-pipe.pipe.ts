import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imppurePipe',
  pure:false
})
export class ImppurePipePipe implements PipeTransform {

  transform(value: string[], ...args: unknown[]): unknown {
    return value.join(", ");
  }

}
