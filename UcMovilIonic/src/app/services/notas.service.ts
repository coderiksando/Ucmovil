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

  getNotas(idAlumno: number, idCurso: number) {
    let url = this.loginService.urlServer;
    url += 'ObtenerNotas' + '?id_a=' + idAlumno + '&id_c=' + idCurso;
    return this.http.get(url);
  }

  setNotas(notas: number[], ramo: number, alumno: number) {
    let url = this.loginService.urlServer;
    let i = 0;
    url += 'IngresarNotas?id_ramo=' + ramo + '&id_alumno=' + alumno;
    notas.forEach(nota => {
      url += '&' + i + '=' + notas[i];
      i++;
    });
    return this.http.get(url);
  }

}
