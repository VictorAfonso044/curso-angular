import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../services/consulta-cep.service';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],

})
export class TemplateFormComponent implements OnInit {

  usuario : any = {
    nome: null,
    email: 'Victor@victor.com'
  }

  constructor(private http: HttpClient,private consultaService: ConsultaCepService) { }

  ngOnInit(): void {

  }

  onSubmit(form){
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(
      data => console.log(data)
    );

  }

  verificarForm(campo){

    return !campo.valid && campo.touched;
  }

  aplicaCssError(campo){
    return {
      'has-error': this.verificarForm(campo),
      'has-feedback': this.verificarForm(campo)
    }
  }

  consultaCep(cep, form){
    if(cep != null && cep !==''){
      this.consultaService.consultaCEP(cep).subscribe(
        data => {
          this.prencheForm(data, form);
        });
    }
  }
  prencheForm(data, formulario){
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    // });
      formulario.form.patchValue({
        endereco: {
          complemento: data.complemento ,
          rua: data.logradouro ,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        }
      });
  }
  resetForm(formulario){
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null ,
        bairro: null  ,
        cidade: null,
        estado: null
      }
    });
  }
}
