import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url: string;
  respuesta: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  cargarNoticias() {
    this.url = this.loginService.urlServer;
    this.url += 'secretaria/mostrar_noticia';
    this.httpClient.get(this.url).subscribe((response: any) => {
        this.respuesta = response;
    }, err => {
        console.log('error');
    });
  }
}
