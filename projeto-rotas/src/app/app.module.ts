import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursosModule } from './cursos/cursos.module';
import { CursosRouting } from './cursos/cursos.routing.module.';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/auth.guard.service';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursoNotFoundComponent } from './cursos/curso-not-found/curso-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    // AlunosModule,
    CursosRouting,
    //AppRoutingModule,
    routing
  ],
  providers: [AuthService, AuthGuardService, CursosGuard] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
