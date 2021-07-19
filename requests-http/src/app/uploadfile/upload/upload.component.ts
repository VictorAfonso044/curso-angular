import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs.operators';
import { UploadfilesService } from '../uploadfiles.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  files: Set<File>;
  progress = 0 ;
  constructor(private uploadService: UploadfilesService) { }

  ngOnInit(): void {
  }

  onChange(evento){
    const selectedFiles = <FileList>evento.srcElement.files ;
    this.files = new Set();
    const fileNames = [];
    for(let i=0;i < selectedFiles.length; i++){
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('labelFile').innerHTML = fileNames.join(', ');
    this.progress = 0;
  }
  onUpload(){
    if(this.files && this.files.size > 0){
      this.uploadService.upload(this.files, '/api/upload')
      .pipe(
        uploadProgress(progress => {
          console.log(progress);
          this.progress = progress
        }),
        filterResponse()
      )
      .subscribe(response =>{
        console.log('Concluido')
      });

    }
  }
  onDownloadExcel(){
    this.uploadService.download('/api/downloadExcel')
    .subscribe(
      (response: any) => {
        this.uploadService.handleFile(response,'ReportAngular.xlsx')
      });
  }
  onDownloadPdf(){
    this.uploadService.download('/api/downloadPdf')
    .subscribe(
      (response: any) => this.uploadService.handleFile(response,'ReportAngular.pdf')
    );
  }
}
