import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition:boolean){
   if(!condition){
    this.viewConteiner.createEmbeddedView(this.templateRef);
   } else{
     this.viewConteiner.clear();
   }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewConteiner: ViewContainerRef) { }

}
