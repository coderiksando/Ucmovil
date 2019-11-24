import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from '../../services/notas.service';

@Component({
  selector: 'app-ingreso-notas',
  templateUrl: './ingreso-notas.page.html',
  styleUrls: ['./ingreso-notas.page.scss'],
})
export class IngresoNotasPage implements OnInit {

  ramo: number;
  nombre: string;
  alumnos: any[];

  constructor( private route: ActivatedRoute, private notasService: NotasService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.ramo = params.id;
        this.nombre = params.nombre;
      });

    this.notasService.getAlumnos(this.ramo).subscribe((alumnos: any[]) => {
      this.alumnos = alumnos;
    });
  }

}
