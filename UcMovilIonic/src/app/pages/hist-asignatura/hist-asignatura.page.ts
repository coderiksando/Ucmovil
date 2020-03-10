import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { ObjetoNota, InfoNota } from 'src/app/interfaces/interfaceNota';

@Component({
  selector: 'app-hist-asignatura',
  templateUrl: './hist-asignatura.page.html',
  styleUrls: ['./hist-asignatura.page.scss'],
})
export class HistAsignaturaPage implements OnInit {

  titulo = 'Historial de asignaturas';
  notasAsignatura: ObjetoNota[] = [];
  histAsignatura: ObjetoNota[] = [];
  objeto: ObjetoNota = {
    idAsignatura: '',
    nombre: '',
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
    url += 'historialNotaAlumno' + '?id=' + this.loginService.datos.usuarios[0].id;
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
            this.objeto.datosNota = [];
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

      i = 0;
      this.notasAsignatura.forEach(asignatura => {
        let notaFinal = 0;
        this.objeto.idAsignatura  = this.notasAsignatura[i].idAsignatura;
        this.objeto.nombre        = this.notasAsignatura[i].nombre;
        this.objeto.year          = this.notasAsignatura[i].year;
        this.objeto.semestre      = this.notasAsignatura[i].semestre;
        this.notasAsignatura[i].datosNota.forEach(element => {
          notaFinal += (element.nota * element.ponderacion / 100);
        });
        notaFinal = Math.round(notaFinal * 10) / 10;
        this.infoNota.nNota = 0;
        this.infoNota.nota = notaFinal;
        if (notaFinal >= 4) {
          this.infoNota.ponderacion = 1;
        } else {
          this.infoNota.ponderacion = 0;
        }
        this.histAsignatura.push(JSON.parse(JSON.stringify(this.objeto)));
        this.histAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
        i += 1;
      });

      console.log(this.histAsignatura);

    }, err => {
      console.log(err);
    });

  }


}