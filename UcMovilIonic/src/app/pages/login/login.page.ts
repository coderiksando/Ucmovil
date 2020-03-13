import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { NewsService } from '../../services/news.service';

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

  constructor(private loginService: LoginService, public httpclient: HttpClient,
              public newsService: NewsService) {

  }

  ngOnInit() {
  }

  // Envía los datos del usuario a el servicio de login y posteriormente realiza una carga de las noticias
  async onSubmitTemplate() {
    await this.loginService.logAccount(this.usuario.email, this.usuario.password);
    await this.newsService.cargarNoticias();
  }

}
