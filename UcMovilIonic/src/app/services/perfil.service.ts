import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  // Se ingresan los datos del usuario que necesita editar el email
  setEmail(email: string) {
    let url = this.loginService.urlServer;
    const user = this.loginService.datosDetalle[0];
    url += 'modificarPerfil?id=' + user.id + '&email=' + email + '&tipo=email';
    return this.http.get(url);
  }

  // Se ingresan los datos del telefono del usuario que desea editar
  setPhone(phone: string) {
    let url = this.loginService.urlServer;
    const user = this.loginService.datosDetalle[0];
    url += 'modificarPerfil?id=' + user.id + '&phone=' + phone + '&tipo=telefono' + '&usertipe=' + user.tipo;
    return this.http.get(url);
  }
}
