import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { from } from 'rxjs';
import { mergeMap, groupBy, reduce, toArray } from 'rxjs/operators';
import { CollapsableGradeComponent } from '../../components/collapsable-grade/collapsable-grade.component';
import { ObjetoNota, InfoNota } from 'src/app/interfaces/interfaceNota';


@Component({
  selector: 'app-notas-alumnos',
  templateUrl: './notas-alumnos.page.html',
  styleUrls: ['./notas-alumnos.page.scss'],
})
export class NotasAlumnosPage implements OnInit {

  titulo = 'Notas asignatura';
  notasAsignatura: ObjetoNota[] = [];
  objeto: ObjetoNota = {
    idAsignatura: "",
    nombre: "",
    year: 0,
    semestre: 0,
    datosNota: []
  };
  infoNota: InfoNota = {
    nota: 0,
    ponderacion: 0,
    nNota: 0
  };

  constructor(  public httpClient: HttpClient, public loginService: LoginService  ) { }

  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += 'RamosActuales' + '?id=' + this.loginService.datos.usuarios[0].id;
    this.httpClient.get(url).subscribe((response: any) => {
      let i = 0;
      response.notasAlumnoActual.forEach(dato => {
        this.objeto.idAsignatura  = dato.id_asignatura;
        this.objeto.nombre        = dato.nombre;
        this.objeto.year          = dato.year;
        this.objeto.semestre      = dato.semestre;
        this.infoNota.nota        = dato.nota;
        this.infoNota.ponderacion = dato.P_nota;
        this.infoNota.nNota       = dato.n_nota;
        if (response.notasAlumnoActual.indexOf(dato) !== 0) {
          if (response.notasAlumnoActual[response.notasAlumnoActual.indexOf(dato)].id_asignatura !== response.notasAlumnoActual[response.notasAlumnoActual.indexOf(dato)-1].id_asignatura) {
            i++;
            this.objeto.datosNota     = [];
            this.notasAsignatura.push(JSON.parse(JSON.stringify(this.objeto)));
            this.notasAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
          } else {
            this.notasAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
          }
        } else {
          this.notasAsignatura.push(JSON.parse(JSON.stringify(this.objeto)));
          this.notasAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
        }
      });
    }, err => {
      console.log(err);
    });

  }

}
