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
  // Crea un menu en un componente para ser llamado de forma fácil desde 
  // todas las páginas que usen a este componente

  lista = [];

  constructor(public menu: MenuController, public pagesService: PagesService,
              public loginService: LoginService, public router: Router, public platform: Platform,
              public staticDataService: StaticDataService ) { }

  // Realiza una verificacion del tipo de usuario y llama la funcion
  // para traer los datos de pages services
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
      // si no cumple con ningún registro lo reenvía al login
      this.router.navigateByUrl('/login');
    }
  }

  ngAfterViewInit() { }

  // Crea las opciones del menu al desplazar el dedo
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  // Limpia los datos del servicio
  limpiezaMenu() {
    this.staticDataService.noticiaObjetoEditar = undefined;
  }

}
