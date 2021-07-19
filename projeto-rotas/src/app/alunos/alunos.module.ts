import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos-routing/alunos-routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDesactivatedGuard } from '../guards/aluno.dessativar.guard';
import { ResolverGuard } from './guards/resolver.guard';




@NgModule({
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers:[AlunosService, AlunosDesactivatedGuard, ResolverGuard]
})
export class AlunosModule { }
