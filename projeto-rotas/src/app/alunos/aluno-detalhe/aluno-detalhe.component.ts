import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private activedRoute: ActivatedRoute,
    private alunoService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activedRoute.data.subscribe(
      (info) => {
        this.aluno = info.aluno ;
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarAluno(){
    this.router.navigate(['/alunos',this.aluno.id,'edit']);
  }
}
