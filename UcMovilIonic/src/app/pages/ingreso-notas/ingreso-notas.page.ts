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

  ramo: number;       // Id del ramo al cual se ingresaran las notas.
  nombre: string;     // Nombre del ramo al cual se ingresaran las notas.
  alumnos: any[];     // Lista de alumnos que cursan el ramo.
  arrayPonderaciones: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // Lista de ponderaciones del ramo.
  arrayInputs: number[] = [0];  // Array que indica la cantidad de inputs a renderizar.
  inactivo = true;    // Variable para desactivar el ingreso de notas si no existen ponderaciones.

  constructor( private route: ActivatedRoute, private notasService: NotasService, private ponderacionesService: PonderacionesService) { }

  ngOnInit() {  // Al iniciar la carga se obtienen los valores pasados por url
    this.route.queryParams
      .subscribe(params => {
        this.ramo = params.id;
        this.nombre = params.nombre;
      });

    this.notasService.getAlumnos(this.ramo).subscribe((alumnos: any[]) => {   // Servicio que obtiene
      this.alumnos = alumnos;                                                 // los alumnos que cursan el ramo desde la BD.
    });
    this.ponderacionesService.getPonderaciones(this.ramo).subscribe((ponderaciones: any[]) => { // Servicio que obtiene
      if (ponderaciones.length > 0) {                                                           // las ponderaciones desde la BD.
        this.inactivo = false;
        ponderaciones.forEach(ponderacion => {
          this.arrayPonderaciones[ponderacion.N_nota - 1] = ponderacion.P_nota;
          if (ponderacion.P_nota > 0.0 && ponderacion.N_nota > 1) {
            const aux = this.arrayInputs.pop();
            this.arrayInputs.push(aux);         // Se inserta un numero por cada ponderacion cargada
            this.arrayInputs.push(aux + 1);     // Para crear una cantidad de inputs ordenados igual a la cantidad de ponderaciones.
          }
        });
      }
    });
  }

}
