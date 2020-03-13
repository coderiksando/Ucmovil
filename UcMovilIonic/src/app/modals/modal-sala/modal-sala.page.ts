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
  }

  // Esta función solo quita de pantalla el modal
  envioSala( profesor: any ) {
    // this.profesorElegido = profesor;
    this.modalController.dismiss({
      dismissed: true,
      // extraccion: this.profesorElegido
    });
  }

  // Reliza una busqueda de los horarios de la sala en la cual están ocupados
  // Para luego hacer comprobaciones del sector que se puede o no guardar
  async busquedaModulos() {
    // se dejan en null los array para realizar posteriormente comprobaciones
    this.modulosOcupados = [];
    this.modulosDisponibles = [];
    this.modulosAPartir = [];
    this.cantidadModulos = null;
    let url = this.loginService.urlServer;
    url += '/d_escuela/busqueda_sala?numero_sala=' + this.sala + '&dia=' + this.dia;
    // Se realiza la petición de la sala y devuelve todos los modulos ocupados en ese instante
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

  // Esta función se llama cada vez que se inserta el modulo desde donde iniciará la reserva
  inicioModulo($event) {
    this.modulosAPartir = [];
    this.cantidadModulos = null;
    this.posicionModuloInicio = this.modulosDisponibles.indexOf($event.detail.value.toString());
    let i = 0;
    // revisa cuantos modulos están disponibles hasta poder parar
    while (
      (Number(this.modulosDisponibles[this.posicionModuloInicio + i]) === this.modulosDisponibles[this.posicionModuloInicio + i + 1] - 1)
      && (this.posicionModuloInicio + i < this.modulosDisponibles.length)
      ) {
      i += 1;
    }
    i += 1;
    // realiza una cantidad de opciones de modulos para el dropdown
    for (let index = 1; index <= i; index++) {
      this.modulosAPartir.push(index);
    }
  }

  // Acá se reserva la sala, el inicio del modulo y la cantidad de modulos correlativos
  async enviarHorario() {
    let url: string;
    url = this.loginService.urlServer;
    url += 'd_escuela/enviar_horario?id_ramo=' + this.ramoVersion.id_ramo;
    url += '&modulo=' + Number(this.modulosDisponibles[this.posicionModuloInicio]) + '&dia=' + this.dia;
    url += '&sala=' + this.sala + '&estado=Aceptada' + '&cantidadCorrelativa=' + this.cantidadModulos;
    this.httpClient.get(url).subscribe(async (response: any) => {
      // crea alertas si todo está bien y se ha ingresado correctamente
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
      // crea una sala si hay un error, por ejemplo solapamiento de las reservas de esta sala
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
