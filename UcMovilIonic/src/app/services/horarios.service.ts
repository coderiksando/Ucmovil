import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor( private http: HttpClient, private loginService: LoginService) { }

  getHorarios() {
    let url = this.loginService.urlServer;
    const user = this.loginService.datosDetalle[0];
    url += '/profesor/obtener_horario' + '?id=' + user.id + '&tipo=' + user.tipo;
    return this.http.get(url);
  }
}
