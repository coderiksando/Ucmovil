import { Component, OnInit } from '@angular/core';
import { RamosImpartidosService } from '../../services/ramos-impartidos.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ramos-impartidos',
  templateUrl: './ramos-impartidos.page.html',
  styleUrls: ['./ramos-impartidos.page.scss'],
})
export class RamosImpartidosPage implements OnInit {

  ramosImpartidos: any[];
  id: any;
  nombre: any;

  // tslint:disable-next-line: max-line-length
  constructor(public navCtrl: NavController, private ramosImpartidosServices: RamosImpartidosService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {

    this.ramosImpartidosServices.getRamosImpartidos().subscribe( (ramos: any[]) => {
      // console.log(ramos);
      this.ramosImpartidos = ramos;
    });
  }


  async opcionesAlert(ramo) {
    this.id = ramo.id_ramo;
    this.nombre = ramo.nombre;
    const alert = await this.alertController.create({
      header: 'Modificar:',
      mode: 'ios',
      buttons: [
        {
          text: 'Ponderaciones',
          handler: () => {
            this.router.navigate(['/ingreso-ponderaciones'], { queryParams: { id: this.id, nombre: this.nombre } });
            }
        },
        {
          text: 'Notas',
          handler: () => {
            }
        }
    ]
    });
    await alert.present();
  }
}
