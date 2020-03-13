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

  ramosImpartidos: any[];   // Array de ramos impartidos por el profesor.
  id: any;                  // Id del profesor
  nombre: any;              // Nombre del ramo

  // tslint:disable-next-line: max-line-length
  constructor(public navCtrl: NavController, private ramosImpartidosServices: RamosImpartidosService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
    // Al iniciar se cargan los ramos impartidos desde la base de datos.
    this.ramosImpartidosServices.getRamosImpartidos().subscribe( (ramos: any[]) => {
      this.ramosImpartidos = ramos;
    });
  }

  // Alerta que se presenta al hacer click en un ramo para ver las opciones.
  async opcionesAlert(ramo) {
    this.id = ramo.id_ramo;
    this.nombre = ramo.nombre;
    const alert = await this.alertController.create({
      header: 'Modificar:',
      mode: 'ios',
      buttons: [
        {
          text: 'Ponderaciones',
          handler: () => {          // Redireccion con parametros a la pagina de ponderaciones.
            this.router.navigate(['/ingreso-ponderaciones'], { queryParams: { id: this.id, nombre: this.nombre } });
            }
        },
        {
          text: 'Notas',
          handler: () => {        // Redireccion con parametros a la pagina de notas.
            this.router.navigate(['/ingreso-notas'], { queryParams: { id: this.id, nombre: this.nombre } });
            }
        }
    ]
    });
    await alert.present();
  }
}
