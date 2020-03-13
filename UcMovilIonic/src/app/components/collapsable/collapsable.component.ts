import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
})
export class CollapsableComponent implements OnInit {

  @Input() alumno: any;
  @Input() ramo: number;
  @Input() arrayPonderaciones: number[];
  @Input() arrayInputs: number[];
  @Input() inactivo: boolean;
  @ViewChild('CollapsableBlock', {static: true}) cardContent: any;
  expanded = false;
  arrayNotas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  outOfRange = false;

  constructor(public renderer: Renderer2,
              private notasService: NotasService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.renderer.setStyle(this.cardContent.el, 'webkitTransition', 'max-height 500ms, padding 500ms');

    this.notasService.getNotas(this.alumno.id, this.ramo).subscribe((notas: any[]) => {
      this.arrayNotas = notas;
    });
  }

  toggle() {
    if (this.expanded) {
      this.renderer.setStyle(this.cardContent.el, 'max-height', '0px');
      this.renderer.setStyle(this.cardContent.el, 'padding', '0px 0px');
    } else {
      this.renderer.setStyle(this.cardContent.el, 'max-height', '500px');
      this.renderer.setStyle(this.cardContent.el, 'padding', '0px 16px');
    }
    this.expanded = !this.expanded;
  }

  onSave() {
    this.outOfRange = false;
    this.arrayNotas.forEach(element => {
      if (element < 1 || element > 7) {
        this.outOfRange = true;
      }
    });
    if (this.outOfRange) {
      this.presentErrorAlert();
    } else {
      this.notasService.setNotas(this.arrayNotas, this.ramo, this.alumno.id).subscribe((response: any) => {
        if (response === 200) {
          this.presentSuccesAlert();
        } else {
          this.presentErrorAlert();
        }
      });
    }
  }
  async presentErrorAlert() {
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

  async presentSuccesAlert() {
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


