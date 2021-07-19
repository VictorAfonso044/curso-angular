
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuardService } from './guards/auth.guard.service';
import { CursosGuard } from './guards/cursos.guard';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', canLoad:[AuthGuardService],
     canActivate:[AuthGuardService], canActivateChild:[CursosGuard] ,
     loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
    { path: 'alunos', canLoad:[AuthGuardService], canActivate:[AuthGuardService] ,
     loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
    { path: 'home',canActivate:[AuthGuardService], component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: ' ' ,redirectTo: '/home' , pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent, canActivate:[AuthGuardService], canLoad:[AuthGuardService]}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES,{useHash: true});
