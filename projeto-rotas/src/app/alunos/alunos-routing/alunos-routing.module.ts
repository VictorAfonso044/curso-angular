import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from '../alunos.component';
import { AlunoDetalheComponent } from '../aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';
import { RouterModule } from '@angular/router';
import { AlunosDesactivatedGuard } from 'src/app/guards/aluno.dessativar.guard';
import { ResolverGuard } from '../guards/resolver.guard';

const alunosRoutes =[
  { path: '', component: AlunosComponent , children: [
  { path: 'new', canDeactivate:[AlunosDesactivatedGuard], component: AlunoFormComponent },
  { path: ':id', resolve:{ aluno: ResolverGuard }, component: AlunoDetalheComponent },
  { path: ':id/edit', canDeactivate:[AlunosDesactivatedGuard], component: AlunoFormComponent }
]}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(alunosRoutes)],
  exports:[RouterModule]
})
export class AlunosRoutingModule { }
