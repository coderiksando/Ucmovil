import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from '../../services/notas.service';
import { PonderacionesService } from '../../services/ponderaciones.service';

@Component({
  selector: 'app-ingreso-notas',
  templateUrl: './ingreso-notas.page.html',
  styleUrls: ['./ingreso-notas.page.scss'],
})
export class IngresoNotasPage implements OnInit {

  ramo: number;
  nombre: string;
  alumnos: any[];
  arrayPonderaciones: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  arrayInputs: number[] = [0];
  inactivo = true;

  constructor( private route: ActivatedRoute, private notasService: NotasService, private ponderacionesService: PonderacionesService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.ramo = params.id;
        this.nombre = params.nombre;
      });

    this.notasService.getAlumnos(this.ramo).subscribe((alumnos: any[]) => {
      this.alumnos = alumnos;
    });
    this.ponderacionesService.getPonderaciones(this.ramo).subscribe((ponderaciones: any[]) => {
      if (ponderaciones.length > 0) {
        this.inactivo = false;
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

}
