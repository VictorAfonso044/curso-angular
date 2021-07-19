import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { LogServiceService } from './log-service.service';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroImpuroPipe } from './filtro-impuro.pipe';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    PipesComponent,
    CamelCasePipe,
    FiltroImpuroPipe,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CursosService,
    LogServiceService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
