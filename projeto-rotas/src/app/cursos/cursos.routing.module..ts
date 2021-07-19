
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth.guard.service';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursosComponent } from './cursos.component';


const APP_ROUTES: Routes = [
    { path: '', canActivate:[AuthGuardService], component: CursosComponent},
    { path: 'cursos/:id',  component: CursoDetalheComponent},
    { path: 'notFound', component: CursoNotFoundComponent},
];

export const CursosRouting: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);
