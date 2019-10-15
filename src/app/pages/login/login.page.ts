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

  async onSubmitTemplate() {
    this.loginService.logAccount(this.usuario.email, this.usuario.password);
    this.newsService.cargarNoticias();
  }

}
