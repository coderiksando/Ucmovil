import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { PagesService } from '../../services/pages.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @ViewChild('BloqueColapsable', {static : true}) hijoItem: any;
  showSubmenu = false;

  lista = [];

  constructor(
              // private renderer2: Renderer2,
              public menu: MenuController, public pagesService: PagesService,
              public loginService: LoginService, public router: Router, public platform: Platform
               ) { }

  ngOnInit() {
    // this.renderer2.setStyle(this.hijoItem.el, 'webkitTransition', 'max-height 500ms');
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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  mostrarItem() {
    // if (this.showSubmenu) {
    //   this.renderer2.setStyle(this.hijoItem.el, 'max-height', '0px');
    // } else {
    //   this.renderer2.setStyle(this.hijoItem.el, 'max-height', '500px');
    // }
    this.showSubmenu = !this.showSubmenu;
  }

}
