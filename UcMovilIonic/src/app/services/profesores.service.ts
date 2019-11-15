import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  profesores: [];

  constructor( private http: HttpClient, private loginService: LoginService ) { }

  async peticionProfesores() {
    let url = this.loginService.urlServer;
    url += 'd_escuela/mostrar_profesor';
    this.http.get(url).subscribe((response: any) => {
      this.profesores = response;
      // console.log(this.profesores);
    }, err => {
      console.log(err);
    });
  }

}
