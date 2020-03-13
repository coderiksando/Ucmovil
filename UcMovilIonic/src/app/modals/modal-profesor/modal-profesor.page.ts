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

  // Esta funcion realiza la selección del profesor
  seleccionProfesor( profesor: any ) {
    this.profesorElegido = profesor;
    // cuando lo clickea quita al modal de la pantalla
    this.modalController.dismiss({
      dismissed: true,
      extraccion: this.profesorElegido
    });
  }

  // Solo quita el modal de la pantalla
  cerrarModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
