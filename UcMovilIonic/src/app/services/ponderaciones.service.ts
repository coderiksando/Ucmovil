import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PonderacionesService {

  constructor( private http: HttpClient, private loginService: LoginService ) { }

  getPonderaciones(id: number) {
    let url = this.loginService.urlServer;
    url += 'ponderaciones' + '?id=' + id;
    return this.http.get(url);
  }

  setPonderaciones(ponderaciones: number[], ramo: number) {
    let url = this.loginService.urlServer;
    let i = 1;
    url += 'ingresoponderaciones?id=' + ramo;
    ponderaciones.forEach(pond => {
      url += '&P_nota' + i + '=' + pond;
      i++;
    });
    console.log(url);
    return this.http.get(url);
  }
}
