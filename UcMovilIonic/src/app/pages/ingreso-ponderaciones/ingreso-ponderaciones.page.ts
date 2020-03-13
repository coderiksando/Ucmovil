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

  sub: any;       //  Variable para almacenar los datos obtenidos de la url.
  ramo: any;      //  Id del ramo al cual se ingresaran las ponderaciones.
  nombre: any;    // Nombre del ramo al cual se ingresaran las ponderaciones.
  arrayNum: number[] = [0];   //  Array que señala la cantidad de ponderaciones ingresadas.
  arrayPonderaciones: number[] = [0 , 0, 0, 0 , 0, 0, 0, 0, 0, 0];    //   Array con los valores de cada ponderacion.
  maxLen = false;   // Variable para bloquear el boton de agregar cuando se ha alcanzado el maximo de ponderaciones.
  minLen = true;    // Variable para bloquear el boton de borrar cuando se ha alcanzado el minimo de ponderaciones.
  constructor(private route: ActivatedRoute,
              private router: Router,
              private ponderacionesService: PonderacionesService,
              public alertController: AlertController) {}

  ngOnInit() {
    this.sub = this.route               // Al iniciar la carga se obtienen los valores pasados por url
      .queryParams
      .subscribe(params => {
        this.ramo = params.id;
        this.nombre = params.nombre;
      });

    // Llamada al servicio que carga las ponderaciones existentes desde la base de datos.
    // Las ponderaciones se guardan ordenadas dentro del arrayPonderaciones segun la nota a la que pertenecen.
    this.ponderacionesService.getPonderaciones(this.ramo).subscribe( (ponderaciones: any[]) => {
      if (ponderaciones.length > 0) {
        ponderaciones.forEach(ponderacion => {
          this.arrayPonderaciones[ponderacion.N_nota - 1] = ponderacion.P_nota;
          if (ponderacion.P_nota > 0.0 && ponderacion.N_nota > 1) {
            const aux = this.arrayNum.pop();
            this.arrayNum.push(aux);          // Se insertan numeros correlativos en el arrayNum
            this.arrayNum.push(aux + 1);      // cada vez que se guarda una ponderacion valida.
            this.minLen = false;              // Al existir 1 o mas ponderaciones cargadas
                                              // se cambia el valor de minLen para activar el boton de borrado
          }
        });
      }
      if (this.arrayNum.length >= 10) {    // Si se alcanzan las 10 ponderaciones
        this.maxLen = true;                // se activa el maximo y se bloquea el boton para agregar nuevas.
      }
    });
  }

  onClick() {         // Funcion para agregar nuevas ponderaciones hasta un maximo de 10.
    const aux = this.arrayNum.pop();
    this.arrayNum.push(aux);
    this.arrayNum.push(aux + 1);
    this.minLen = false;
    if (this.arrayNum.length >= 10) {
      this.maxLen = true;
    }
  }

  onDelete(pos) {         // Funcion para borrar una ponderacion. La variable pos indica el numero de la ponderacion.
    this.arrayPonderaciones.splice(pos, 1);     // Se remueve el valor del arreglo en la posicion indicada
    this.arrayPonderaciones.push(0);            // Se señala que existe una ponderacion vacia asignado el valor 0.
    this.arrayNum.pop();                   // Se elimina el ultimo numero del arrayNum para saber cuantas ponderaciones quedan en la lista.
    this.maxLen = false;
    if (this.arrayNum.length <= 1) {
      this.minLen = true;               // Si solo queda 1 ponderacion se bloquea el boton de borrado.
    }
  }

  onSave() {
    let zeros = false;        // Booleano que señala si existe alguna ponderacion con valor 0 a ser ingresada.
    let index = 0;
    let suma = 0;             // Suma de ponderaciones para verificar que no excedan el 100%
    this.arrayNum.forEach(obj => {
      suma += this.arrayPonderaciones[index];
      if (this.arrayPonderaciones[index] <= 0) {    // Se recorre el array de ponderaciones
        zeros = true;                               // Si se encuenta un 0 se registra el valor verdadero en la variable
      }
      index++;
    });

    if (zeros) {                // Si hay ponderaciones 0 se muestra un error y se aborta el guardado.
      this.presentZerosAlert();
    } else {
        if (suma > 100) {           // Si las ponderaciones exceden el 100% se muestra un error.
          this.presentCientosAlert();
        } else {
          this.ponderacionesService.setPonderaciones(this.arrayPonderaciones, this.ramo).subscribe((response: any) => {
            if (response === 200) {
              this.presentSuccesAlert();  // Si no hay errores se guardan las ponderacionesy se muestra un mensaje de exito.
            } else {
              this.presentErrorAlert();
            }
          });
        }
    }
  }

  async presentZerosAlert() {     // Alerta que se presentara si hay 0
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
            // console.log('Cancel');
            }
        }
    ]
    });

    await alert.present();
  }


  async presentCientosAlert() {   // Alerta que se presentara si las ponderaciones suman mas de 100%
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No es posible almacenar las ponderaciones',
      message: 'La suma de las ponderaciones no puede ser superior a 100.',
      animated: true,
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Cancel');
            }
        }
    ]
    });

    await alert.present();
  }

  async presentErrorAlert() {     // Alerta que se presentara si hay cualquier otro error desconocido.
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
            // console.log('Cancel');
            }
        }
    ]
    });

    await alert.present();
  }

  async presentSuccesAlert() {    // Alerta que se presentara si hay exito en el guardado.
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
            // console.log('Cancel');
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
