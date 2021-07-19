import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuth: boolean = false;
  menuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(usuario: Usuario){

    if(usuario.nome === 'usuario' && usuario.senha === '123'){
      this.usuarioAuth = true;
      this.menuEmitter.emit(true);
      this.router.navigate(['/']);
    }else{
      this.usuarioAuth = false;
      this.menuEmitter.emit(false);
    }
  }
  isAuthorizated(){
    return this.usuarioAuth ;
  }
}
