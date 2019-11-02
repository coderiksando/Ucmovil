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

  seleccionRamo( ramo: any ) {
    this.ramoElegido = ramo;
    this.idRamoElegido = ramo.id_asignatura;
    this.modalController.dismiss({
      dismissed: true,
      extraccion: this.ramoElegido
    });
  }

  cerrarModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
