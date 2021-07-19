import { Component, OnInit, ViewChild } from '@angular/core';

import { EMPTY, empty, Observable, Subject } from 'rxjs';
import { Cursos } from '../Cursos';
import { CursosService } from '../cursos.service';
import { catchError, delay, switchMap, take } from 'rxjs/operators'
import { AlertmodalService } from 'src/app/shared/alertmodal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  @ViewChild('deleteModal') deleteModalTemplate;
  cursos: Cursos[];
  cursos$: Observable<Cursos[]>;
  error$ = new Subject<boolean>();
  deleteModalRef: BsModalRef;

  constructor(
    private cursoService: Cursos2Service,
    private alertService: AlertmodalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.onRefresh();
  }
  onRefresh(){
    this.cursos$ = this.cursoService.list().pipe(
      delay(1000),
      catchError(error => {
        this.handleError();
        return empty();
      })
      );
  }
  handleError(){
    let msg = 'Erro ao carregar cursos.Tente novamente mais tarde...';
    this.alertService.showAlertDanger(msg);
  }
  onEdit(id: number){
    this.router.navigate(['edit', id ],{ relativeTo: this.activatedRoute });
  }
  onDelete(curso){
    const result$ = this.alertService.showConfirm("Confimarção","Deseja remover ?");
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.cursoService.delete(curso.id) : EMPTY)
      ).subscribe(
        success => this.onRefresh(),
        error => this.alertService.showAlertDanger('Erro ao deletar...')
      );
  }
  onConfirmeDelete(){
    this.modalService.hide();
  }
  onDeclineDelete(){
    this.modalService.hide();
  }
}
