import { Component, OnInit } from '@angular/core';
import { RamosService } from '../../services/ramos.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ramo',
  templateUrl: './modal-ramo.page.html',
  styleUrls: ['./modal-ramo.page.scss'],
})
export class ModalRamoPage implements OnInit {

  ramoElegido: [];
  idRamoElegido: string;

  constructor(  public ramosService: RamosService,
                public modalController: ModalController ) { }

  ngOnInit() {
  }

  // Esta funcion realiza la selección de la asignatura
  seleccionRamo( ramo: any ) {
    this.ramoElegido = ramo;
    this.idRamoElegido = ramo.id_asignatura;
    // cuando lo clickea quita al modal de la pantalla
    this.modalController.dismiss({
      dismissed: true,
      extraccion: this.ramoElegido
    });
  }

  // Solo quita el modal de la pantalla
  cerrarModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
