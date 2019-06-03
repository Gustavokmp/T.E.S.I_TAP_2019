import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'socket-app';
  isLogin = false;
  username: string  = '';
  password: string  = '';
  registro = {
    username:'',
    password:'',
    email:''
  }

  login(){
    console.log(this.username, this.password);
    this.isLogin = true;
    
  }
  registrar(){
    console.log(this.registro);
  }
  sair(){
    this.isLogin = false;
  }

}
