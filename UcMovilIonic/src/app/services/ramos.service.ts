import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RamosService {

  ramos = [];

  constructor( private http: HttpClient, private loginService: LoginService ) { }

  // Realiza una busqueda de todos los ramos, está asociada a la función de crear una version de ramo
  async peticionRamos() {
    let url = this.loginService.urlServer;
    url += 'd_escuela/mostrar_asignatura';
    this.http.get(url).subscribe((response: any) => {
      this.ramos = response;
    }, err => {
      console.log(err);
    });
  }

}
