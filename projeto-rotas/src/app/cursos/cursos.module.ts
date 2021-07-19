import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalheComponent,
        CursoNotFoundComponent
    ],
    providers:[CursosService]
})
export class CursosModule {}