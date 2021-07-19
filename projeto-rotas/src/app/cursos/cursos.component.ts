import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;
  constructor(
    private cursoService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
    this.inscricao = this.activatedRoute.queryParams.subscribe(
      (queryParans) => {
        this.pagina = queryParans['pagina'];
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  nextPage(){
   
    this.router.navigate(['/cursos'],{queryParams:{'pagina':++this.pagina}});
  }

}
