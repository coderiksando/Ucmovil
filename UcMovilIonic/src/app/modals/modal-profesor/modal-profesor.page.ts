import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from '../../services/profesores.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-profesor',
  templateUrl: './modal-profesor.page.html',
  styleUrls: ['./modal-profesor.page.scss'],
})
export class ModalProfesorPage implements OnInit {

  profesorElegido: [];

  constructor(  public profesoresService: ProfesoresService,
                public modalController: ModalController ) { }

  ngOnInit() {
  }

  seleccionProfesor( profesor: any ) {
    this.profesorElegido = profesor;
    this.modalController.dismiss({
      dismissed: true,
      extraccion: this.profesorElegido
    });
  }

  cerrarModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
