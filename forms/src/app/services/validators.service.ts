import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  static requiredMinCheckBox(min = 1) {
    const validator = (formArray: FormArray) => {
      // const values = formArray.controls;
      // let totalChecked = 0;
      // for(i = 0; i< values.length;i++){
      //   if(values[i].value){
      //     totalChecked += 1;
      //   }
      // }
      const totalChecked = formArray.controls
        .map((v) => v.value)
        .reduce((total, atual) => (atual ? total + atual : total), 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }
  static cepValidator (control: FormControl){
    const cep = control.value;
    if(cep && cep !== ''){
    const validaCep = /^[0-9]{8}$/;
    return validaCep.test(cep) ? null : { cepInvalido: 'Invalido'  }
    }
    return null;
  }
  static equalsTo(otherField: string){
    const validator = (formControl: FormControl) => {
      if(formControl === null){
        throw new Error('É nescessario informar um campo.')
      }
      if(!formControl.root || !(<FormGroup> formControl.root).controls ){
        return null;
      }
      const field = (<FormGroup> formControl.root).get(otherField);
      if(!field){
        throw new Error('É nescessario informar um campo valido.')
      }
      if(field.value !== formControl.value){
        return { equalsTo: 'NOT EQUALS' }
      }
      return null;
    }
    return validator
  }
  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){
    const config = {
      'required' : `${fieldName} é Obrigatorio.` ,
      'minlength' : `${fieldName} é nescessario no minimo ${validatorValue.requiredLength} caracteres.` ,
      'cepInvalido' : `CEP Invalido` ,
    }
    return config[validatorName] ;
  }
}
