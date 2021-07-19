import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { DropdownService } from '../services/dropdown.service';
import { ValidatorsService } from '../services/validators.service';
import { DataFormService } from './data-form.service';
import { Estados } from './Estados';
import { BaseFormComponent } from '../base-form/base-form.component';
import { Cidades } from './cidade';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  estados: Estados[];
  cidades: Cidades[];
  cargos: any[];
  tecnologias: any[];
  newsop: any[];
  frameworks: string[] = ['Angular', 'Vue', 'Spring'];
  constructor(
    private consultaService: ConsultaCepService,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private dataFormService: DataFormService
  ) {
    super();
  }

  ngOnInit(): void {

    this.dropdownService.getEstados().subscribe(
      data => this.estados = data
    );
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecs();
    this.newsop = this.dropdownService.getNews();

    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.email, Validators.required], this.validarExistenceEmail.bind(this)),
      confirmaremail: new FormControl(null, ValidatorsService.equalsTo('email')),
      endereco: new FormGroup({
        cep: new FormControl(null, [Validators.required, ValidatorsService.cepValidator]),
        numero: new FormControl(null, Validators.required),
        complemento: new FormControl(null),
        rua: new FormControl(null, Validators.required),
        bairro: new FormControl(null, Validators.required),
        cidade: new FormControl(null, Validators.required),
        estado: new FormControl(null, Validators.required),
      }),
      cargo: new FormControl(null),
      tecnologia: new FormControl(null),
      newslatter: new FormControl('s'),
      termos: new FormControl(false, Validators.pattern('true')),
      frameworks: this.buildFramewoeks()
    });
    this.formulario.get('endereco.cep').statusChanges
    .pipe(
      distinctUntilChanged(),
      switchMap(status => status === 'VALID' ?
      this.consultaService.consultaCEP(this.formulario.get('endereco.cep').value) : empty())
      )
    .subscribe(
      values => values ? this.prencheForm(values) : {}
    );

    this.dropdownService.getCidades(11).subscribe(
      data => console.log(data)
    );
    this.formulario.get('endereco.estado').valueChanges
     .pipe(
       map(estado => this.estados.filter(e => e.sigla === estado)),
       map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
       switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
       tap(console.log)
     )
     .subscribe(cidades => this.cidades = cidades);
  }

  buildFramewoeks(){
    const values = this.frameworks.map(v =>  new  FormControl(false) );
    return new FormArray(values, [ValidatorsService.requiredMinCheckBox(1)]);
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    console.log(this.formulario);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });

    console.log(valueSubmit);
    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(
          (data) => {
            console.log(data);
            this.resetForm();
          },
          (error: any) => alert('Deu erro ai meno')
        );
    } else {
      this.varificavalidacao(this.formulario);
    }
  }
  verificarEmailForm() {
    const campoEmail = this.formulario.get('email');
    if (this.formulario.get('email')) {
      return campoEmail.errors && campoEmail.touched;
    }
  }

  consultaCep() {
    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, '');
    const validaCep = /^[0-9]{8}$/;

    if (cep != null && cep !== '') {
      this.consultaService.consultaCEP(cep).subscribe((data) => {
        this.prencheForm(data);
      });
    }

    if (validaCep.test(cep)) {
      this.http.get(`//viacep.com.br/ws/${cep}/json/`).subscribe((data) => {
        this.prencheForm(data);
      });
    }
  }
  prencheForm(data) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    // });
    this.formulario.patchValue({
      endereco: {
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      },
    });
  }
  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' };
    this.formulario.get('cargo').setValue(cargo);
  }
  setarTecs(){
    this.formulario.get('tecnologia').setValue(['Java', 'Angular']);
  }
  compararCargos(obj1, obj2) {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 === obj2;
  }
  comparetecnologias(obj1, obj2) {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.desc === obj2.desc
      : obj1 === obj2;
  }
  validarExistenceEmail(formControl: FormControl){
    return this.dataFormService.verificarEmail(formControl.value)
    .pipe(
      map( emailExiste => emailExiste ? {emailInvalido: true} : null)
    );
  }
}
