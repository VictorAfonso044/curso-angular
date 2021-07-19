import { EventEmitter, Injectable } from '@angular/core';

import { LogServiceService } from '../log-service.service';

@Injectable()
export class CursosService{

    constructor(private logService: LogServiceService ){
    }    
    emitirCursoCriado = new EventEmitter<string>();
    cursos: string[] = ['Java','Angular','Node'];

    getCursos(){
        this.logService.consoleLog("Obtendo Cursos");
        return  this.cursos;
    }
    addCurso(curso:string){
        this.logService.consoleLog("Criando curso "+curso+"...");
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}