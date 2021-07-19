import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cidades } from '../data-form/cidade';
import { Estados } from '../data-form/Estados';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estados[]>{
    return this.http.get<Estados[]>('./assets/estados.json').pipe();
  }
  getCargos(){
    return [
      {nome: 'Dev', nivel: "Junior", desc: 'Dev JR' },
      {nome: 'Dev', nivel: "Pleno", desc: 'Dev Pl' },
      {nome: 'Dev', nivel: "Senior", desc: 'Dev Sr' }
    ];
  }
  getTecs(){
    return [
      {nome: 'Java',  desc: 'Bruto' },
      {nome: 'Angular',  desc: 'Framework' },
      {nome: '.NET',  desc: 'core' }
    ];
  }
  getNews(){
    return [
      {valor: 's',  desc: 'Sim' },
      {valor: 'n',  desc: 'Não' }
    ];
  }
  getCidades(idEstado: number){
    return this.http.get<Cidades[]>('./assets/cidades.json').pipe(
      map((cidades: Cidades[]) => cidades.filter(c => c.estado == idEstado))
    );
  }
}
