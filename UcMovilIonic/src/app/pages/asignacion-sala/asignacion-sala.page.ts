import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { ModalController } from '@ionic/angular';
import { ModalSalaPage } from '../../modals/modal-sala/modal-sala.page';

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
  inicio = 0;
  showMe = false;
  busqueda = true;
  versionRamoArrayOriginal: any;

  constructor(  public httpClient: HttpClient, public loginService: LoginService,
                public modalController: ModalController ) { }

  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += '/d_escuela/consultaTotalMallas';
    this.httpClient.get(url).subscribe((response: any) => {
      this.mallas = response.mallas;
    }, err => {
      console.log(err);
    });
  }

  async busquedaAsignaturaMalla( idMalla: any ) {
    if (this.inicio === 0) {
      // inicialización para agregar lista de ramos
      this.mallaElegida = idMalla.srcElement.value;
      this.inicio += 1;
      return;
    } else {
      this.mallaElegida = idMalla.srcElement.value;
      if (this.mallaElegidaAnterior !== this.mallaElegida) {
        let url = this.loginService.urlServer;
        url += '/d_escuela/mostrar_version_ramo?id_malla=' + this.mallaElegida;
        this.httpClient.get(url).subscribe((response: any) => {
          this.versionRamo = response.version_ramo;
          this.versionRamoArrayOriginal = JSON.parse(JSON.stringify(this.versionRamo));
          // console.log(this.versionRamoArrayOriginal);
        }, err => {
          console.log(err);
        });
      }
      this.mallaElegidaAnterior = this.mallaElegida;
    }
  }

  async asignacionSala( item ) {
    const myModal = await this.modalController.create({
      component: ModalSalaPage,
      componentProps: {
        ramoVersion: item
      },
      cssClass: 'sala-modal-css'
    });
    return await myModal.present();
  }

  search() {
    if (this.showMe === false) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  }

  busquedaEvento(event) {
    this.versionRamo = JSON.parse(JSON.stringify(this.versionRamoArrayOriginal));
    let noBorrar = [];
    let borrar = [];
    let nNoticia = 0;
    if (event.target.value.length !== 0) {
      this.versionRamo.forEach(vRamo => {
        for (const elementoVRamo in vRamo) {
          if (elementoVRamo === 'nombre_asignatura' || elementoVRamo === 'id_asignatura' ||
              elementoVRamo === 'year' || elementoVRamo === 'semestre' ||
              elementoVRamo === 'nombre_profesor') {
            if (vRamo[elementoVRamo].toString().toLowerCase().indexOf(event.target.value.toLowerCase().toString()) >= 0) {
              if (noBorrar[noBorrar.length - 1] !== nNoticia) {
                noBorrar.push(nNoticia);
              }
            }
          }
        }
        nNoticia += 1;
      });
      for (let index = 0; index < this.versionRamo.length ; index++) {
        if (noBorrar.indexOf(index) === -1) {
          borrar.push(index);
        }
      }
    }
    if (borrar.length > 0) {
      let aux = 0;
      borrar.forEach(element => {
        this.versionRamo.splice(element - aux, 1);
        aux += 1;
      });
    }
  }

}
