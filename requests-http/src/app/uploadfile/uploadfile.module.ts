import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadfileRoutingModule } from './uploadfile-routing.module';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadfileRoutingModule
  ]
})
export class UploadfileModule { }
