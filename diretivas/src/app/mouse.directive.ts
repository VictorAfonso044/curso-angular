import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'blue';
    }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor')backgroundColor: string;

    constructor() {
   }

}
