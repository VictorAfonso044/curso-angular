import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadfilesService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string){
    const formData =  new FormData();
    files.forEach(file => formData.append('file', file, file.name));
    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    })
  }
  download(url: string){
    return this.http.get(url,{
      responseType: 'blob' as 'json',
    });
  }
  handleFile(response:any, fileName: string){
    const file = new Blob([response],{
      type: response.type
    });
    if(window.navigator && window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }
    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(blob);
    link.remove();
  }
}

