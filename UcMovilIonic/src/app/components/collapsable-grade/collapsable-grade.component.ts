import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-collapsable-grade',
  templateUrl: './collapsable-grade.component.html',
  styleUrls: ['./collapsable-grade.component.scss'],
})
export class CollapsableGradeComponent implements OnInit {
  // Colapsable que renderiza todas las notas de los alumnos en una version de asignatura

  // En la variable ramo se entrega los datos del objeto que debe renderizarse
  @Input() ramo: any;
  @Input() inactivo: boolean;
  @ViewChild('CollapsableBlock', {static: true}) cardContent: any;
  expanded = false;

  constructor(public renderer: Renderer2,
              private notasService: NotasService,
              public alertController: AlertController) { }

  // Iniciliza las transiciones de estilo del componente en un tiempo de 0.5 seg
  ngOnInit() {
    this.renderer.setStyle(this.cardContent.el, 'webkitTransition', 'max-height 500ms, padding 500ms');
  }

  // Realiza cambios en el scss de los componentes para cambiar sus estilos
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

}