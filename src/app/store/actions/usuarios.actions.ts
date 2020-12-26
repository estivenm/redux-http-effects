import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario';

export const CARGAR_USUARIOS = '[Usuarios] cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] cargar usuarios fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] cargar usuarios succes';

export class CargarUsuarios implements Action {
  readonly  type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly  type = CARGAR_USUARIOS_FAIL;
  constructor(public payload: any) {}
}

export class CargarUsuariosSuccess implements Action {
  readonly  type = CARGAR_USUARIOS_SUCCESS;
  constructor(public usuario: Usuario[]) {}
}

export type usuariosAcciones = CargarUsuarios |
                               CargarUsuariosFail |
                               CargarUsuariosSuccess;

