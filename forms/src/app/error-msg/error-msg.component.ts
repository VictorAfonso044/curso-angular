import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() formControl: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {

  }

  get errorMessage(){
    for(const propertyName in this.formControl.errors){
      if(this.formControl.errors.hasOwnProperty(propertyName) && this.formControl.touched){
        return ValidatorsService.getErrorMsg(this.label,propertyName, this.formControl.errors[propertyName]);
      }
    }
    return null;
  }
}
