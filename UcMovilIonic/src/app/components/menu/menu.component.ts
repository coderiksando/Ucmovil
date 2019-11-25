import { Component, OnInit, ViewChild, Renderer2, RendererFactory2, AfterViewInit} from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { PagesService } from '../../services/pages.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  private renderer2: Renderer2;
  @ViewChild('BloqueColapsable', {static : false}) hijoItem: any;
  showSubmenu = false;

  lista = [];

  constructor(
              public rendererFactory: RendererFactory2,
              public menu: MenuController, public pagesService: PagesService,
              public loginService: LoginService, public router: Router, public platform: Platform)
              {
                this.renderer2 = rendererFactory.createRenderer(null, null);
              }

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

  ngAfterViewInit() {
    this.renderer2.setStyle(this.hijoItem.el, 'webkitTransition', 'max-height 500ms');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  mostrarItem() {
    if (this.showSubmenu) {
      this.renderer2.setStyle(this.hijoItem.el, 'max-height', '0px');
    } else {
      this.renderer2.setStyle(this.hijoItem.el, 'max-height', '500px');
    }
    this.showSubmenu = !this.showSubmenu;
  }

}
