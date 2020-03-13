import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
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

  // Pido al servidor un array de objetos con todas las notas de las asignaturas,
  // para luego modificar el array a uno más simple para la vista en HTML
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
        // Reviso que el indice del dato no sea 0 y no tener errores de indice
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
    }, err => {
      console.log(err);
    });

  }

}
