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

  // Realiza una consulta para encontrar todas las mallas que existen en la tabla de mallas
  // para posteriormente traer asignaturas
  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += '/d_escuela/consultaTotalMallas';
    this.httpClient.get(url).subscribe((response: any) => {
      this.mallas = response.mallas;
    }, err => {
      console.log(err);
    });
  }

  // Con la malla asignada, realizamos una busqueda de las asignaturas de esta malla
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
          // En este array se copia los datos de versionRamo a través de funciones de copia en json
          this.versionRamoArrayOriginal = JSON.parse(JSON.stringify(this.versionRamo));
        }, err => {
          console.log(err);
        });
      }
      this.mallaElegidaAnterior = this.mallaElegida;
    }
  }

  // Se llama al modal de asignacion de sala con sus caracteristicas
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

  // Cambia la variable para mostrar la barra de busqueda
  search() {
    if (this.showMe === false) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  }

  // Esta funcion realiza un filtro de la asignatura buscada
  busquedaEvento(event) {
    this.versionRamo = JSON.parse(JSON.stringify(this.versionRamoArrayOriginal));
    let noBorrar = [];
    let borrar = [];
    let nNoticia = 0;
    // realiza una consulta del largo de la palabra buscada, siendo solo activada después de 0 letras
    if (event.target.value.length !== 0) {
      // revisa en cada objeto del array version ramo
      this.versionRamo.forEach(vRamo => {
        // busca en cada atributo del objeto siendo de importancia los valores como nombre_asignatura, etc
        for (const elementoVRamo in vRamo) {
          if (elementoVRamo === 'nombre_asignatura' || elementoVRamo === 'id_asignatura' ||
              elementoVRamo === 'year' || elementoVRamo === 'semestre' ||
              elementoVRamo === 'nombre_profesor') {
            // Revisa que los datos strings de los atributos sean iguales a la palabra buscada sin importar mayusculas
            if (vRamo[elementoVRamo].toString().toLowerCase().indexOf(event.target.value.toLowerCase().toString()) >= 0) {
              if (noBorrar[noBorrar.length - 1] !== nNoticia) {
                // se crea un array con objetos que no deben borrarse
                noBorrar.push(nNoticia);
              }
            }
          }
        }
        nNoticia += 1;
      });
      // se agregan los indices del array de objetos que si deben borrarse
      for (let index = 0; index < this.versionRamo.length ; index++) {
        if (noBorrar.indexOf(index) === -1) {
          borrar.push(index);
        }
      }
    }
    // realiza la acción si existen cosas que borrar
    if (borrar.length > 0) {
      let aux = 0;
      // realiza el borrado
      borrar.forEach(element => {
        this.versionRamo.splice(element - aux, 1);
        aux += 1;
      });
    }
  }

}
