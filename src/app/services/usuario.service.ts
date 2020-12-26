import { baseUrl } from './../shared/globalConstant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'users/?per_page=6&delay=3';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${baseUrl}${this.url}`)
    .pipe(
      map(res => res['data'])
    );
  }
  getUserById(id: string) {
    return this.http.get(`${baseUrl}users/${id}`)
    .pipe(
      map(res => res['data'])
    );
  }
}
