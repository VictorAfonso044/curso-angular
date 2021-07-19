import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertmodalService {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

   private showAlert(type = 'danger', msg, timeout?: number){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = msg;
    if (timeout){
      setTimeout(() => this.bsModalRef.hide(), timeout);
    }
  }
  showAlertDanger(msg, timeout?: number){
    this.showAlert(AlertTypes.DANGER, msg, timeout);
  }
  showAlertSuccess(msg, timeout?: number){
    this.showAlert(AlertTypes.SUCCESS, msg, timeout);
  }
  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string){
    const confirmbsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    confirmbsModalRef.content.title = title;
    confirmbsModalRef.content.msg = msg ;
    if(okTxt){
      this.bsModalRef.content.okTxt = okTxt;
    }
    if(cancelTxt){
      this.bsModalRef.content.cancelTxt = cancelTxt;
    }
    return (<ConfirmModalComponent>confirmbsModalRef.content).confirmResult;
  }
}
