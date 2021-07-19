import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImpuro',
  pure: false
})
export class FiltroImpuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
