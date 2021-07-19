import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoGuard } from '../guards/curso.guard';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  { path: 'new', component: CursosFormComponent,
  resolve:{
    curso: CursoGuard
  }},
  { path: 'edit/:id', component: CursosFormComponent ,
  resolve:{
    curso: CursoGuard
  }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
