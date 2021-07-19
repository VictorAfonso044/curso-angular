import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { FundoDirective } from './fundo.directive';
import { MouseDirective } from './mouse.directive';
import { HighDirective } from './high.directive';
import { NgElseDirective } from './ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent,
    FundoDirective,
    MouseDirective,
    HighDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
