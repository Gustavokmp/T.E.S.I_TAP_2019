import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'socket-app';
  username: string  = '';
  password: string  = '';
  registro = {
    username:'',
    password:'',
    email:''
  }

  constructor(private usuarioService:UsuarioService){};

  login(){
    console.log('AQUIII')
    this.usuarioService.login(this.username,this.password).subscribe(data =>{
      localStorage.setItem('token',data.token);
    });  
  }
  registrar(){
    console.log(this.registro);
    this.usuarioService.registrar(this.registro).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      
      console.log("Error", error);
      
      });
  }
  sair(){
    localStorage.removeItem('token');
  }
  isLogin(){
    return localStorage.getItem('token') != null;
  }

}
