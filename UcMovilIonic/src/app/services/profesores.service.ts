import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  profesores: [];

  constructor( private http: HttpClient, private loginService: LoginService ) { }

  // Se obtiene en un array todos los profesores que existen
  // Esta funcion está asociada al ingreso de una asignatura con un profesor y crear una version de asignatura
  async peticionProfesores() {
    let url = this.loginService.urlServer;
    url += 'd_escuela/mostrar_profesor';
    this.http.get(url).subscribe((response: any) => {
      this.profesores = response;
    }, err => {
      console.log(err);
    });
  }

}
