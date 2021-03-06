import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PonderacionesService {

  constructor( private http: HttpClient, private loginService: LoginService ) { }

  // Obtiene en una lista la cantidad de ponderaciones de una version de asignatura
  getPonderaciones(id: number) {
    let url = this.loginService.urlServer;
    url += 'ponderaciones' + '?id=' + id;
    return this.http.get(url);
  }

  // Edita o ingresa ponderaciones para una version de asignatura
  setPonderaciones(ponderaciones: number[], ramo: number) {
    let url = this.loginService.urlServer;
    let i = 1;
    url += 'ingresoponderaciones?id=' + ramo;
    ponderaciones.forEach(pond => {
      url += '&P_nota' + i + '=' + pond;
      i++;
    });
    return this.http.get(url);
  }
}
