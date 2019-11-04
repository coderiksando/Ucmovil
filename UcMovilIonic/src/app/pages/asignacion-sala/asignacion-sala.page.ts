import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-asignacion-sala',
  templateUrl: './asignacion-sala.page.html',
  styleUrls: ['./asignacion-sala.page.scss'],
})
export class AsignacionSalaPage implements OnInit {

  titulo = 'asignacion de salas';
  valorMalla = 'ICI';
  mallas = [];
  mallaElegida: string;
  mallaElegidaAnterior: string;
  versionRamo = [];

  constructor( private httpClient: HttpClient, private loginService: LoginService ) { }

  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += '/d_escuela/consultaTotalMallas';
    this.httpClient.get(url).subscribe((response: any) => {
      this.mallas = response.mallas;
      // console.log(this.mallas);
    }, err => {
      console.log(err);
    });
  }

  async busquedaAsignaturaMalla( idMalla: any ) {
    this.mallaElegida = idMalla.srcElement.value;
    if (this.mallaElegidaAnterior !== this.mallaElegida) {
      let url = this.loginService.urlServer;
      url += '/d_escuela/mostrar_version_ramo?id_malla=' + this.mallaElegida;
      this.httpClient.get(url).subscribe((response: any) => {
        this.versionRamo = response.version_ramo;
        // console.log(this.versionRamo);
      }, err => {
        console.log(err);
      });
    }
    this.mallaElegidaAnterior = this.mallaElegida;
  }

}
