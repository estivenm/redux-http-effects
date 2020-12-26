
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as usuariosFromActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

  constructor(
    private  actions$: Actions,
    private  usuarioService: UsuarioService
    ) {}

  @Effect()
  cargarUsuarios$  = this.actions$.pipe(
      ofType(usuariosFromActions.CARGAR_USUARIOS),
      switchMap(() => { // cancela el obsevable que se ejecuta
        return this.usuarioService.getUsers()
        .pipe( // dispara una  nueva accion
          map(user =>  new usuariosFromActions.CargarUsuariosSuccess(user)),
          catchError(error => of(new usuariosFromActions.CargarUsuariosFail(error)))
        )
      })
  );
}
