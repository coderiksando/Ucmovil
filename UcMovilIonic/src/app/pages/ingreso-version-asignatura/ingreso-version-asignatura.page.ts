import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProfesorPage } from '../../modals/modal-profesor/modal-profesor.page';
import { ModalRamoPage } from '../../modals/modal-ramo/modal-ramo.page';
import { ProfesoresService } from '../../services/profesores.service';
import { RamosService } from '../../services/ramos.service';

@Component({
  selector: 'app-ingreso-version-asignatura',
  templateUrl: './ingreso-version-asignatura.page.html',
  styleUrls: ['./ingreso-version-asignatura.page.scss'],
})
export class IngresoVersionAsignaturaPage implements OnInit {

  titulo = 'Ingreso de versiones de ramos';
  botonRegresoCancelar = false;
  actualYear: number;

  versionRamo = {
    id_asignatura : String,
    id_profesor   : Number,
    year          : Number(),
    semestre      : Number()
  };

  constructor(  public modalController: ModalController, public profesoresService: ProfesoresService,
                public ramosService: RamosService ) { }

  async ngOnInit() {
    await this.ramosService.peticionRamos();
    await this.profesoresService.peticionProfesores();
    this.actualYear = new Date().getFullYear();
    this.versionRamo.year = this.actualYear;
    this.versionRamo.semestre = 1;
  }

  async modalProfesor() {
    const modal = await this.modalController.create({
      component: ModalProfesorPage
    });
    return await modal.present();
  }

  async modalRamo() {
    const modal = await this.modalController.create({
      component: ModalRamoPage
    });
    return await modal.present();
  }

  envioVersionRamo() {
    console.log(this.versionRamo);
  }

}
