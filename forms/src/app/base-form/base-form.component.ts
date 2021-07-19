import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<br>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  abstract submit();

  onSubmit(){
    if(this.formulario.valid){
      this.submit();
    }
  }

  resetForm() {
    this.formulario.reset();
  }

  verificarForm(input: string) {
    const campo = this.formulario.get(input);
    return !campo.valid && campo.touched;
  }

  varificavalidacao(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((campo) => {
      console.log(campo);
      const controle = group.get(campo);
      controle.markAsTouched();
      controle.markAsDirty();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.varificavalidacao(controle);
      }
    });
  }
  aplicaCssError(campo: string) {
    return {
      'has-error': this.verificarForm(campo),
      'has-feedback': this.verificarForm(campo),
    };
  }
}
