import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Cursos } from '../cursos/Cursos';
import { CursosService } from '../cursos/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoGuard implements Resolve<Cursos> {

  constructor(private service: CursosService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cursos | Observable<Cursos> | Promise<Cursos> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return {
      id: null,
      nome: null
    };
  }

}
