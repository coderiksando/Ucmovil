import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalProfesorPage } from '../../modals/modal-profesor/modal-profesor.page';
import { ModalRamoPage } from '../../modals/modal-ramo/modal-ramo.page';
import { ProfesoresService } from '../../services/profesores.service';
import { RamosService } from '../../services/ramos.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-ingreso-version-asignatura',
  templateUrl: './ingreso-version-asignatura.page.html',
  styleUrls: ['./ingreso-version-asignatura.page.scss'],
})
export class IngresoVersionAsignaturaPage implements OnInit {

  titulo = 'Ingreso de versiones de ramos';
  botonRegresoCancelar = false;
  actualYear: number;
  nombreProfesor: string;
  nombreAsignatura: string;

  versionRamo = {
    id_asignatura : String(),
    id_profesor   : Number(),
    year          : Number(),
    semestre      : Number()
  };

  constructor(  public modalController: ModalController, public profesoresService: ProfesoresService,
                public ramosService: RamosService, public alertController: AlertController,
                public http: HttpClient, public loginService: LoginService ) { }

  // Hago la busqueda de los ramos y profesores para luego hacer nuevas versiones de ramos
  async ngOnInit() {
    await this.ramosService.peticionRamos();
    await this.profesoresService.peticionProfesores();
    this.actualYear = new Date().getFullYear();
    this.versionRamo.year = this.actualYear;
    this.versionRamo.semestre = 1;
  }

  // Creo un modal con todos los profesores disponibles y luego de la selección ingreso al profesor,
  // además cierro el modal para no tener inconvenientes
  async modalProfesor() {
    const modal = await this.modalController.create({
      component: ModalProfesorPage
    });
    modal.onDidDismiss().then((dataProfesor: any) => {
      if (dataProfesor.data.extraccion) {
        this.versionRamo.id_profesor = dataProfesor.data.extraccion.id;
        this.nombreProfesor = dataProfesor.data.extraccion.nombre;
      }
    });
    return await modal.present();
  }

  // Creo un modal con todos las asignaturas y luego de la selección ingreso la asignatura a la variable,
  // además cierro el modal para no tener inconvenientes
  async modalRamo() {
    const modal = await this.modalController.create({
      component: ModalRamoPage
    });
    modal.onDidDismiss().then((dataRamo: any) => {
      if (dataRamo.data.extraccion) {
        this.versionRamo.id_asignatura = dataRamo.data.extraccion.id_asignatura;
        this.nombreAsignatura = dataRamo.data.extraccion.nombre;
      }
    });
    return await modal.present();
  }

  // En esta función envío todos los datos requeridos por el servidor a través de un metodo get
  async envioVersionRamo() {
    let url = this.loginService.urlServer;
    url += 'd_escuela/anadir_profesor_ramo';
    url += '?id_asignatura=' + this.versionRamo.id_asignatura;
    url += '&id_profesor=' + this.versionRamo.id_profesor;
    url += '&year=' + this.versionRamo.year + '&semestre=' + this.versionRamo.semestre;
    this.http.get(url).subscribe(async (response: any) => {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se ha ingresado la version de ramo y profesor correctamente.',
        buttons: ['OK']
      });
      await alert.present();
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Lo sentimos',
        message: 'La versión de asignatura no ha sido ingresada por errores internos, inténtelo nuevamente.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }

}
