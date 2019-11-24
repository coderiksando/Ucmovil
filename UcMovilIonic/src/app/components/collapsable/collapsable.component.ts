import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { PonderacionesService } from '../../services/ponderaciones.service';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
})
export class CollapsableComponent implements OnInit {

  @Input() alumno: any;
  @Input() ramo: number;
  @ViewChild('CollapsableBlock', {static: true}) cardContent: any;
  expanded = false;
  arrayPonderaciones: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  arrayInputs: number[] = [0];

  constructor( public renderer: Renderer2, private ponderacionesService: PonderacionesService) { }

  ngOnInit() {
    this.renderer.setStyle(this.cardContent.el, 'webkitTransition', 'max-height 500ms, padding 500ms');

    this.ponderacionesService.getPonderaciones(this.ramo).subscribe((ponderaciones: any[]) => {
      if (ponderaciones.length > 0) {
        ponderaciones.forEach(ponderacion => {
          this.arrayPonderaciones[ponderacion.N_nota - 1] = ponderacion.P_nota;
          if (ponderacion.P_nota > 0.0 && ponderacion.N_nota > 1) {
            const aux = this.arrayInputs.pop();
            this.arrayInputs.push(aux);
            this.arrayInputs.push(aux + 1);
          }
        });
      }
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

}
