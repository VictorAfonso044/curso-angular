import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    numeroPaginas : 408 ,
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript',
    rating: 4.56,
    preco: 49.99,
    dataLancamento: new Date(2016, 5, 23),
    urls: 'https://loiane.training/continuar-curso/angular'
  };

  livros: string[] = ['Java','Angular'];

  valorAsync = new Promise((resolve,reject) => {
    setTimeout(() => 
      resolve('Valor assincrono'), 2000);
  });
  constructor() { }

  ngOnInit(): void {
  }

}
