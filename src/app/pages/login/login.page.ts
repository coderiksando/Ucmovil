import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, public httpclient: HttpClient) {

  }

  ngOnInit() {
  }

  async onSubmitTemplate() {
    this.loginService.logAccount(this.usuario.email, this.usuario.password);
  }

}
