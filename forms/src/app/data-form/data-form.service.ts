import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string){
    return this.http.get('assets/verificarEmail.json')
    .pipe(
      delay(2000),
      map(
      (dados: {emails: any[]}) => dados.emails),
      map((data: {email: string}[]) => data.filter(v => v.email === email)),
      map( (dados: any[]) => dados.length > 0)
      );
  }

}
