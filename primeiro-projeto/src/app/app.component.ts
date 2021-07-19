import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlImage = "http://lorempixel.com/400/200/sports/";
  title = 'primeiro-projeto';
  invalue: string = '';
  nomeCurso:string ='ArgularV2';
  getTitle(){
    return "Primeiro Projeto";
  }
  click(){
    alert('Clicouu!!')
  }
  onKeyUp(evento: KeyboardEvent){
    this.invalue = (<HTMLInputElement>evento.target).value ;  
  }
  onMudouValor(event){
    console.log(event.novoValor);
  }

}
