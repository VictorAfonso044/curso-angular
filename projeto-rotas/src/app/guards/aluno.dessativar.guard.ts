import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormDeactivate } from './form.candeactivate';

@Injectable()
export class AlunosDesactivatedGuard implements CanDeactivate<IFormDeactivate>{
        canDeactivate(
            component: IFormDeactivate,
            currentRoute: ActivatedRouteSnapshot,
            currentState: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            return component.podeDesativar();
        }
    }
