import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

import * as  fromUsuariosActions from '../../store/actions';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(public usuarioService: UsuarioService,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe(usuarios => {
      this.usuarios = usuarios.user;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });

    this.store.dispatch( new fromUsuariosActions.CargarUsuarios());
    // this.usuarioService.getUsers().subscribe( users => {
    //   this.usuarios = users;
    // });

  }

}
