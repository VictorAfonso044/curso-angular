import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'projeto-rotas';
  showMenu: boolean = false;

  constructor(private authServeice: AuthService){}

  ngOnInit(): void {
    this.authServeice.menuEmitter.subscribe(
      mostrar => this.showMenu = mostrar
    );
  }
}
