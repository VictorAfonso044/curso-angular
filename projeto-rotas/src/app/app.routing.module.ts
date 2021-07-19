import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './cursos/curso-not-found/curso-not-found.component';
import { CursosComponent } from './cursos/cursos.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'cursos/:id', component: CursoDetalheComponent},
    { path: 'notFound', component: CursoNotFoundComponent},
    { path: 'login', component: LoginComponent}
]; 

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


