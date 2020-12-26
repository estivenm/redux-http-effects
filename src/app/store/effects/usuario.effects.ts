
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as usuarioFromActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

  constructor(
    private  actions$: Actions,
    private  usuarioService: UsuarioService
    ) {}

  @Effect()
  cargarUsuario$  = this.actions$.pipe(
      ofType(usuarioFromActions.CARGAR_USUARIO),
      switchMap((action) => { // cancela el obsevable que se ejecuta
        const id = action['id'];

        return this.usuarioService.getUserById(id)
        .pipe( // dispara una  nueva accion
          map(user =>  new usuarioFromActions.CargarUsuarioSuccess(user)),
          catchError(error => of(new usuarioFromActions.CargarUsuarioFail(error)))
        );
      })
  );
}
