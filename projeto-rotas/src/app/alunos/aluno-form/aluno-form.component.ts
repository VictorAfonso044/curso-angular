import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormDeactivate } from 'src/app/guards/form.candeactivate';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormDeactivate {
  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private activedRoute: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  podeDesativar() {
    return this.podeMudarRota();
  }

  ngOnInit(): void {
    this.inscricao = this.activedRoute.params.subscribe(
    (params: any) => {
      let id = params['id'];
      this.aluno = this.alunoService.getAluno(id);
      if(this.aluno == null){
        this.aluno ={};
      }
    }  
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
  }
  podeMudarRota(){
    if(this.formMudou){
      confirm("Tem certeza que deseja sair");
      return true;
    }
  } 
}
