import * as fromUsuarios from '../actions/index';
import { Usuario } from '../../models/usuario';

export interface UsuariosState {
  user: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;

}

const estadoInicial: UsuariosState = {
  user : [],
  loading : false,
  loaded: false,
  error: false
};

export function  usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {

  switch (action.type) {

    case fromUsuarios.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null
      };

      case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
          return {
            ...state,
            loading: false,
            loaded: true,
            user: [...action.usuario]
          };
      case fromUsuarios.CARGAR_USUARIOS_FAIL:
          return {
            ...state,
            loading: false,
            loaded: false,
            error: {
              status: action.payload.status,
              message: action.payload.message,
              url: action.payload.url
            }
          };

          default:
      return state;
  }

}


