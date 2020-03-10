import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-collapsable-hist',
  templateUrl: './collapsable-hist.component.html',
  styleUrls: ['./collapsable-hist.component.scss'],
})
export class CollapsableHistComponent implements OnInit {

  @Input() listaCompleta: any;
  @Input() ramo: any;
  @Input() inactivo: boolean;
  @ViewChild('CollapsableBlock', {static: true}) cardContent: any;
  expanded = false;

  constructor(public renderer: Renderer2,
              private notasService: NotasService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.renderer.setStyle(this.cardContent.el, 'webkitTransition', 'max-height 500ms, padding 500ms');
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
}