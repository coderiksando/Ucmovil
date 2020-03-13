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

  // realizo una peticion de la base de datos de todas las notas del alumno
  // para luego crear otro array de objetos que pueda procesarse en la vista HTML
  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += 'historialNotaAlumno' + '?id=' + this.loginService.datos.usuarios[0].id;
    this.httpClient.get(url).subscribe((response: any) => {
      let i = 0;
      // por cada objeto de la asignatura devuelto entrego estos datos a un nuevo objeto mas refinado
      response.notasAlumnoActual.forEach(dato => {
        this.objeto.idAsignatura  = dato.id_asignatura;
        this.objeto.nombre        = dato.nombre;
        this.objeto.year          = dato.year;
        this.objeto.semestre      = dato.semestre;
        this.infoNota.nota        = dato.nota;
        this.infoNota.ponderacion = dato.P_nota;
        this.infoNota.nNota       = dato.n_nota;
        // reviso que el indice al cual accedo sea distinto de 0 para no pasarme del indice
        if (response.notasAlumnoActual.indexOf(dato) !== 0) {
          // realizo una condicional para saber si los campos anteriores al actual son iguales
          if (response.notasAlumnoActual[response.notasAlumnoActual.indexOf(dato)].id_asignatura !== response.notasAlumnoActual[response.notasAlumnoActual.indexOf(dato)-1].id_asignatura) {
            // si son distintos creo un nuevo objeto para diferenciar de la asignatura a la cual metere notas
            i++;
            this.objeto.datosNota = [];
            this.notasAsignatura.push(JSON.parse(JSON.stringify(this.objeto)));
            this.notasAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
          } else {
            // si son iguales entonces solo ingreso las notas al array dentro del objeto
            this.notasAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
          }
        } else {
          // si el indice es 0 siempre se ingresará un nuevo objeto y
          // además se ingresaran las notas al array dentro del objeto
          this.notasAsignatura.push(JSON.parse(JSON.stringify(this.objeto)));
          this.notasAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
        }
      });

      // para la segunda sección hago una ponderizaciond e las notas y luego reviso si está aprobado
      // o no el estudiante en aquella asignatura
      i = 0;
      this.notasAsignatura.forEach(asignatura => {
        let notaFinal = 0;
        this.objeto.idAsignatura  = this.notasAsignatura[i].idAsignatura;
        this.objeto.nombre        = this.notasAsignatura[i].nombre;
        this.objeto.year          = this.notasAsignatura[i].year;
        this.objeto.semestre      = this.notasAsignatura[i].semestre;
        // ponderización de notas
        this.notasAsignatura[i].datosNota.forEach(element => {
          notaFinal += (element.nota * element.ponderacion / 100);
        });
        // redondeo
        notaFinal = Math.round(notaFinal * 10) / 10;
        this.infoNota.nNota = 0;
        this.infoNota.nota = notaFinal;
        // revisión de aprobacion
        if (notaFinal >= 4) {
          this.infoNota.ponderacion = 1;
        } else {
          this.infoNota.ponderacion = 0;
        }
        // copia de los datos e ingresados a un nuevo array que cumpla con las necesidades de la vista
        this.histAsignatura.push(JSON.parse(JSON.stringify(this.objeto)));
        this.histAsignatura[i].datosNota.push(JSON.parse(JSON.stringify(this.infoNota)));
        i += 1;
      });

    }, err => {
      console.log(err);
    });

  }


}