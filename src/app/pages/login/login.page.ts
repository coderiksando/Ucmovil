import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  respuesta: Observable<any>;

  usuario = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, public httpclient: HttpClient ,
              public loadingController: LoadingController) {

  }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log(this.usuario);
    this.loginService.logAccount(this.usuario.email, this.usuario.password);
  }

}
