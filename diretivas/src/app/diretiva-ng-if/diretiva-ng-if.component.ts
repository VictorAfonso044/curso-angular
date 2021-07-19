import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.css']
})
export class DiretivaNgIfComponent implements OnInit {
  mostrarCursos: boolean = false ;
  cursos: string[] = [];
  aba:string = 'Home';
  fav:boolean = false ; 
  tarefa:any ={
    desc:"descrição",
    responsavel:null
  };
  constructor(
    
  ) { }

  onClick(){
    this.fav = !this.fav ;
  }

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
