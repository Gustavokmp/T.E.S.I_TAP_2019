import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:4444/';


  login(username,password){
    return this.http.post<any>(this.url+'auth/login', { username: username, password: password })
  }

  registrar(usuario){
    return this.http.post(this.url+'usuario', usuario);
  }
}
