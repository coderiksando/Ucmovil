import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-modal-sala',
  templateUrl: './modal-sala.page.html',
  styleUrls: ['./modal-sala.page.scss'],
})
export class ModalSalaPage implements OnInit {

  // datos de la version de la asignatura
  ramoVersion: any;
  modulosOcupados: any;
  modulosDisponibles = new Array();
  modulosAPartir = [];
  sala: string;
  dia: string;
  posicionModuloInicio: number;
  cantidadModulos: number;

  constructor(  public modalController: ModalController, public httpClient: HttpClient,
                public loginService: LoginService, public alertController: AlertController ) { }

  ngOnInit() {
    // console.log(this.ramoVersion);
  }

  envioSala( profesor: any ) {
    // this.profesorElegido = profesor;
    this.modalController.dismiss({
      dismissed: true,
      // extraccion: this.profesorElegido
    });
  }

  async busquedaModulos() {
    this.modulosOcupados = [];
    this.modulosDisponibles = [];
    this.modulosAPartir = [];
    this.cantidadModulos = null;
    let url = this.loginService.urlServer;
    url += '/d_escuela/busqueda_sala?numero_sala=' + this.sala + '&dia=' + this.dia;
    this.httpClient.get(url).subscribe(async (response: any) => {
      this.modulosOcupados = response;
      // consigue los modulos que están ocupados en un mapeo
      const arrayModuloDisponible = this.modulosOcupados.horario.map( x => {
        return x.modulo.toString();
      });
      // revisa si el index relleno no está dentro del array creado
      for (let index = 1; index <= 12; index++) {
        if (arrayModuloDisponible.indexOf( index.toString() ) === -1) {
          this.modulosDisponibles.push( index.toString() );
        }
      }
      if (this.modulosDisponibles.length === 0) {
        const alert = await this.alertController.create({
          header: 'Ocupados',
          subHeader: 'Existe un problema',
          message: 'La sala solicitada en aquel día no tiene cupos disponibles este semestre, por favor intente otra sala y otro horario.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }, err => {
      console.log(err);
    });
  }

  inicioModulo($event) {
    this.modulosAPartir = [];
    this.cantidadModulos = null;
    this.posicionModuloInicio = this.modulosDisponibles.indexOf($event.detail.value.toString());
    let i = 0;
    while (
      (Number(this.modulosDisponibles[this.posicionModuloInicio + i]) === this.modulosDisponibles[this.posicionModuloInicio + i + 1] - 1)
      && (this.posicionModuloInicio + i < this.modulosDisponibles.length)
      ) {
      i += 1;
    }
    i += 1;
    for (let index = 1; index <= i; index++) {
      this.modulosAPartir.push(index);
    }
  }

  async enviarHorario() {
    let url: string;
    url = this.loginService.urlServer;
    url += 'd_escuela/enviar_horario?id_ramo=' + this.ramoVersion.id_ramo;
    url += '&modulo=' + Number(this.modulosDisponibles[this.posicionModuloInicio]) + '&dia=' + this.dia;
    url += '&sala=' + this.sala + '&estado=Aceptada' + '&cantidadCorrelativa=' + this.cantidadModulos;
    this.httpClient.get(url).subscribe(async (response: any) => {
      const alert = await this.alertController.create({
        header: 'Éxito',
        subHeader: 'Petición de sala',
        message: 'Se ha realizado la petición de sala de forma exitosa.',
        buttons: ['OK']
      });
      await alert.present();
      this.modalController.dismiss({
        dismissed: true
      });
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Perdón',
        subHeader: 'Petición de sala',
        message: 'La operación ha fracasado, por favor recargue modulos e intente de nuevo.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }

}
