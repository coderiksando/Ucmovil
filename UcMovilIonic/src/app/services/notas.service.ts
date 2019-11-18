import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient, private loginService: LoginService) { }



  getAlumnos(id: number) {
    let url = this.loginService.urlServer;
    url += 'ListaAlumnos' + '?id=' + id;
    return this.http.get(url);
  }

}
