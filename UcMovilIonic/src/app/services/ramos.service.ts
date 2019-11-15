import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RamosService {

  ramos = [];

  constructor( private http: HttpClient, private loginService: LoginService ) { }

  async peticionRamos() {
    let url = this.loginService.urlServer;
    url += 'd_escuela/mostrar_asignatura';
    this.http.get(url).subscribe((response: any) => {
      this.ramos = response;
      // console.log(this.ramos);
    }, err => {
      console.log(err);
    });
  }

}
