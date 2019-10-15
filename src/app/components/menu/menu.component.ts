import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PagesService } from '../../services/pages.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  lista: Pagina[];

  constructor(private menu: MenuController, private pagesService: PagesService,
              private loginService: LoginService, private router: Router ) { }

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

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
interface Pagina {
  icon: string;
  name: string;
  redirectTo: string;
}
