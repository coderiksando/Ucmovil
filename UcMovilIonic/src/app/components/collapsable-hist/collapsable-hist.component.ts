import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-collapsable-hist',
  templateUrl: './collapsable-hist.component.html',
  styleUrls: ['./collapsable-hist.component.scss'],
})
export class CollapsableHistComponent implements OnInit {
  // Colapsable que renderiza el historial de notas del alumnos en una version de asignatura

  // Se envía la lista completa para realizar logistica dentro de la vista
  // y asi agrupar estas asignaturas por año y por mes
  @Input() listaCompleta: any;
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