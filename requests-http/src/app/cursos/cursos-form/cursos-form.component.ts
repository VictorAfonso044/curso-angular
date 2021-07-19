import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AlertmodalService } from 'src/app/shared/alertmodal.service';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
})
export class CursosFormComponent implements OnInit {
  formulario: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private modal: AlertmodalService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.pipe(
    //   map((params:any) =>  params['id'] ),
    //   switchMap(id => this.service.loadById(id))
    // ).subscribe( curso => this.updateForm(curso) );

    const curso = this.activatedRoute.snapshot.data['curso'];
    this.formulario = this.formBuilder.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
    });

  }
  onCancel() {}
  onSubmit() {
    this.submitted = true;
    console.log(this.formulario);
    if (this.formulario.valid) {
      console.log('toppp');
      this.service.save(this.formulario.value).subscribe(
          (success) => {
            this.modal.showAlertSuccess('Salvo com Sucesso', 3000);
            this.location.back();
          },
          (error) => this.modal.showAlertDanger('Erro')
        );
  }
  }
  hasError(field: string) {
    return this.formulario.get(field).errors;
  }
}
