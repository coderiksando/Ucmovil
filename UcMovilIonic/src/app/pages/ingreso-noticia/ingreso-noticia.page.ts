import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { LoginService } from '../../services/login.service';
import { NewsService } from '../../services/news.service';
import { LobbyPage } from '../lobby/lobby.page';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-ingreso-noticia',
  templateUrl: './ingreso-noticia.page.html',
  styleUrls: ['./ingreso-noticia.page.scss'],
})
export class IngresoNoticiaPage implements OnInit {

  noticia = {
    id_noticia  : '',
    titulo      : '',
    texto       : '',
    estado      : '',
    propietario : '',
    fecha       : new Date()
  };

  titulo = 'Ingreso de noticias';
  botonRegresoCancelar = false;

  constructor(  public menuComponent: MenuComponent, public loginService: LoginService,
                public newsService: NewsService, public staticDataService: StaticDataService ) { }

  ngOnInit() {
    if ( this.staticDataService.noticiaObjetoEditar !== undefined ) {
      this.noticia.titulo = this.staticDataService.noticiaObjetoEditar.titulo;
      this.noticia.texto = this.staticDataService.noticiaObjetoEditar.texto;
      this.noticia.propietario = this.staticDataService.noticiaObjetoEditar.propietario;
      this.noticia.id_noticia  = this.staticDataService.noticiaObjetoEditar.id_noticia;
    } else {
      this.noticia.propietario = this.loginService.datosDetalle[0].nombre;
    }
    this.noticia.estado = 'Aprobada';
  }

  obtenerFecha() {
    let fecha: string;
    const year = (this.noticia.fecha.getFullYear()).toString();
    let month = (this.noticia.fecha.getMonth() + 1).toString();
    if (month.length < 2 ) {
      month = '0' + month;
    }
    const day = (this.noticia.fecha.getDate()).toString();

    fecha = year.toString() + '-' + month.toString() + '-' + day.toString();
    return fecha;
  }

  obtenerHora() {
    let time: string;
    let hours = (this.noticia.fecha.getHours()).toString();
    if (hours.length < 2 ) {
      hours = '0' + hours;
    }
    let minutes = (this.noticia.fecha.getMinutes()).toString();
    if (minutes.length < 2 ) {
      minutes = '0' + minutes;
    }
    let seconds = (this.noticia.fecha.getSeconds()).toString();
    if (seconds.length < 2 ) {
      seconds = '0' + seconds;
    }
    time = hours + ':' + minutes + ':' + seconds;
    return time;
  }

  async envioNoticia() {
    await this.newsService.sendNew(this.noticia);
    await this.newsService.cargarNoticias();
  }

}
