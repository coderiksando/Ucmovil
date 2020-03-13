import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
})
export class CollapsableComponent implements OnInit {

  // Componente que renderiza una tarjeta expandible que muestra el nombre del alumno en su titulo
  // y se expande al ser clickeada para dar paso a una serie de input en los que se ingresan
  // las notas de dicho alumno.

  @Input() alumno: any;     // Alumno al que se le ingresaran las notas
  @Input() ramo: number;    // Id del ramo al que se le ingresaran las notas
  @Input() arrayPonderaciones: number[];    // Ponderaciones de las notas del ramo.
  @Input() arrayInputs: number[];           // Array para señalar la cantidad de inputs a renderizar
  @Input() inactivo: boolean;     // Booleano que señala si deben activarse la funcion expandible.
  @ViewChild('CollapsableBlock', {static: true}) cardContent: any;
  expanded = false;   // Booleano que señala si la tarjeta esta expandida.
  arrayNotas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  outOfRange = false;   // Booleano que señala si hay notas fuera del rango 1 a 7

  constructor(public renderer: Renderer2,
              private notasService: NotasService,
              public alertController: AlertController) { }

  ngOnInit() {
    // Se activan las transiciones de estilo para crear un efecto de animacion.
    this.renderer.setStyle(this.cardContent.el, 'webkitTransition', 'max-height 500ms, padding 500ms');

    // Se cargan las notas del alumno desde la base de datos.
    this.notasService.getNotas(this.alumno.id, this.ramo).subscribe((notas: any[]) => {
      this.arrayNotas = notas;
    });
  }

  toggle() {  // Funcion que expande la tarjeta si esta comprimida y viseversa.
    if (this.expanded) {
      this.renderer.setStyle(this.cardContent.el, 'max-height', '0px');
      this.renderer.setStyle(this.cardContent.el, 'padding', '0px 0px');
    } else {
      this.renderer.setStyle(this.cardContent.el, 'max-height', '500px');
      this.renderer.setStyle(this.cardContent.el, 'padding', '0px 16px');
    }
    this.expanded = !this.expanded;
  }

  onSave() {    // Funcion que guarda las notas
    this.outOfRange = false;
    this.arrayNotas.forEach(element => {
      if (element < 1 || element > 7) {
        this.outOfRange = true;         // Verdadero si hay notas fuera de rango
      }
    });
    if (this.outOfRange) {
      this.presentErrorAlert();   // Muestra mensaje de error si hay notas fuera de rango
    } else {
      this.notasService.setNotas(this.arrayNotas, this.ramo, this.alumno.id).subscribe((response: any) => {
        if (response === 200) {
          this.presentSuccesAlert();    // Muestra alerta de exito si se guardan las notas.
        } else {
          this.presentErrorAlert();
        }
      });
    }
  }
  async presentErrorAlert() {   // Alerta que se presenta si las notas estan fuera de rango.
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No es posible almacenar las notas',
      message: 'Las notas deben tener un valor entre 1 y 7.',
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

  async presentSuccesAlert() {      // Alerta que se muestra si hay exito en el guardado.
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Las notas han sido actualizadas exitosamente.',
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





}


