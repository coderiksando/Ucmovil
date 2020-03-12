import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;
  saveEmail = false;
  savePhone = false;

  constructor(private loginService: LoginService, private perfilService: PerfilService) { }

  ngOnInit() {
    this.usuario = this.loginService.datosDetalle[0];
    console.log(this.loginService.datosDetalle);
  }

  toggleEmail() {
    this.saveEmail = true;
  }

  togglePhone() {
    this.savePhone = true;
  }

  guardarEmail() {
    this.saveEmail = false;
    this.perfilService.setEmail(this.usuario.email).subscribe();
  }

  guardarPhone() {
    this.savePhone = false;
    this.perfilService.setPhone(this.usuario.telefono).subscribe();
  }

}
