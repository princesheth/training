import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  img:string="../../assets/img/logo used in header.svg";
  public auth() {
    this.router.navigate(['dashboard'])
  }
  constructor(private router:Router){
  }
}
