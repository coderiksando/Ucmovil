import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { from } from 'rxjs';
import { mergeMap, groupBy, reduce, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-notas-alumnos',
  templateUrl: './notas-alumnos.page.html',
  styleUrls: ['./notas-alumnos.page.scss'],
})
export class NotasAlumnosPage implements OnInit {

  titulo = 'Notas asignatura';
  notasAsignatura: any;

  constructor( public httpClient: HttpClient, public loginService: LoginService ) { }

  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += 'RamosActuales' + '?id=' + this.loginService.datos.usuarios[0].id;
    this.httpClient.get(url).subscribe((response: any) => {
      this.notasAsignatura = response;
    }, err => {
      console.log(err);
    });

  }

  corroborarNombre(ramosActuales, index){
    if (index === 0) {
      return true;
    }
    if (ramosActuales[index - 1].nombre !== ramosActuales[index].nombre) {
      return true;
    } else {
      return false;
    }
  }

}
