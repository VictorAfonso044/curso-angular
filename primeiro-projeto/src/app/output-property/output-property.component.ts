import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @ViewChild('campoInput') campoValorInput: ElementRef;
  @Input() valor:number = 0;
  @Output() mudouValor = new EventEmitter ;
   deincrementa(){
    this.campoValorInput.nativeElement.value--; 
    this.mudouValor.emit({novoValor: this.valor});
   }
   incrementa(){
     this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
   }
  constructor() { }

  ngOnInit(): void {
  }

}
