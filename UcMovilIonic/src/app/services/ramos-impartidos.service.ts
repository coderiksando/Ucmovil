import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RamosImpartidosService {

  constructor( private http: HttpClient, private loginService: LoginService) { }

  // Obtiene todos los datos de los ramos impartidos por un profesor
  getRamosImpartidos() {
    let url = this.loginService.urlServer;
    url += 'ramos_impartidos' + '?id=' + this.loginService.datosDetalle[0].id;
    return this.http.get(url);
  }
}
