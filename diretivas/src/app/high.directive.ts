import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective implements OnInit{

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.colorHigh;
    }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.colorDefault;
  }

  @HostBinding('style.backgroundColor')backgroundColor: string;

  @Input() colorDefault: string = 'white';
  @Input() colorHigh: string = 'red';


  constructor()  { }

  ngOnInit(): void {
    this.backgroundColor = this.colorDefault
  }

}
