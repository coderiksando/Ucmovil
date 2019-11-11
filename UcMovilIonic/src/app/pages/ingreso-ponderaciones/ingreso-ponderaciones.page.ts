import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumericValueAccessor, AlertController } from '@ionic/angular';
import { PonderacionesService } from '../../services/ponderaciones.service';
import { isEmptyExpression } from '@angular/compiler';


@Component({
  selector: 'app-ingreso-ponderaciones',
  templateUrl: './ingreso-ponderaciones.page.html',
  styleUrls: ['./ingreso-ponderaciones.page.scss'],
})
export class IngresoPonderacionesPage implements OnInit {

  sub: any;
  ramo: any;
  nombre: any;
  arrayNum: number[] = [0];
  arrayPonderaciones: number[] = [0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0];
  maxLen = false;   // Variable para bloquear el boton de agregar cuando se ha alcanzado el maximo de ponderaciones.
  minLen = true;    // Variable para bloquear el boton de borrar cuando se ha alcanzado el minimo de ponderaciones.
  constructor(private route: ActivatedRoute,
              private router: Router,
              private ponderacionesService: PonderacionesService,
              public alertController: AlertController) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ramo = params.id;
        this.nombre = params.nombre;
      });

    this.ponderacionesService.getPonderaciones(this.ramo).subscribe( (ponderaciones: any[]) => {
      if (ponderaciones.length > 0) {
        ponderaciones.forEach(ponderacion => {
          this.arrayPonderaciones[ponderacion.N_nota - 1] = ponderacion.P_nota;
          if (ponderacion.P_nota > 0.0 && ponderacion.N_nota > 1) {
            const aux = this.arrayNum.pop();
            this.arrayNum.push(aux);
            this.arrayNum.push(aux + 1);
            this.minLen = false;
          }
        });
      }
      if (this.arrayNum.length >= 10) {
        this.maxLen = true;
      }
      console.log(this.arrayPonderaciones);
      console.log(this.arrayNum);
    });
  }

  onClick() {
    const aux = this.arrayNum.pop();
    this.arrayNum.push(aux);
    this.arrayNum.push(aux + 1);
    this.minLen = false;
    if (this.arrayNum.length >= 10) {
      this.maxLen = true;
    }
  }

  onDelete(pos) {
    this.arrayPonderaciones.splice(pos, 1);
    this.arrayPonderaciones.push(0);
    this.arrayNum.pop();
    this.maxLen = false;
    if (this.arrayNum.length <= 1) {
      this.minLen = true;
    }
  }

  onSave() {
    let zeros = false;
    let index = 0;
    this.arrayNum.forEach(obj => {
      if (this.arrayPonderaciones[index] <= 0) {
        zeros = true;
      }
      index++;
    });

    if (zeros) {
      this.presentZerosAlert();
    } else {
      this.ponderacionesService.setPonderaciones(this.arrayPonderaciones, this.ramo)
      .subscribe((response: any) => {
        if (response === 200) {
          this.presentSuccesAlert();
        } else {
          this.presentErrorAlert();
        }
      });
    }
  }

  async presentZerosAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No es posible almacenar las ponderaciones',
      message: 'Los valores de las ponderaciones deben ser superiores a 0.',
      animated: true,
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
            }
        }
    ]
    });

    await alert.present();
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No es posible almacenar las ponderaciones',
      message: 'Se ha producido un error desconocido, por favor intentenlo nuevamente.',
      animated: true,
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
            }
        }
    ]
    });

    await alert.present();
  }

  async presentSuccesAlert() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Las ponderaciones han sido actualizadas exitosamente.',
      animated: true,
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
            }
        }
    ]
    });

    await alert.present();
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
