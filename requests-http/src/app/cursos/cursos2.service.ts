import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud.service';
import { Cursos } from './Cursos';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Cursos> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }
}
