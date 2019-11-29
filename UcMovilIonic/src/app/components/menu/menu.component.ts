import { Component, OnInit, ViewChild, Renderer2, AfterViewInit} from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { PagesService } from '../../services/pages.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  lista = [];

  constructor(public menu: MenuController, public pagesService: PagesService,
              public loginService: LoginService, public router: Router, public platform: Platform,
              public staticDataService: StaticDataService ) { }

  ngOnInit() {
    this.lista = this.pagesService.componentes;
    if (this.loginService.datos !== undefined) {
      if (this.loginService.datos.usuarios[0].tipo === 'alumno') {
        this.pagesService.paginaAlumno();
      }
      if (this.loginService.datos.usuarios[0].tipo === 'profesor') {
        this.pagesService.paginaProfesor();
      }
      if (this.loginService.datos.usuarios[0].tipo === 'secretaria') {
        this.pagesService.paginaSecretaria();
      }
      if (this.loginService.datos.usuarios[0].tipo === 'director_carrera') {
        this.pagesService.paginaDirector();
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngAfterViewInit() { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  limpiezaMenu() {
    this.staticDataService.noticiaObjetoEditar = undefined;
  }

}
