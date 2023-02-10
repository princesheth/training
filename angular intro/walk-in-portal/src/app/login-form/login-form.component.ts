import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../register';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class LoginFormComponent {
  login:login;
  img:string="../../assets/img/logo used in header.svg";
  public auth() {
    const email = (<HTMLInputElement>document.querySelector("#email")).value;
    const password = (<HTMLInputElement>document.querySelector("#pass")).value;
    const remember = (<HTMLInputElement>document.querySelector("#Remember")).value;
    this.login={
      email:email,
      password:password,
      remember:remember
    }
    this.router.navigate(['dashboard'])
  }
  constructor(private router:Router){
  }
}
