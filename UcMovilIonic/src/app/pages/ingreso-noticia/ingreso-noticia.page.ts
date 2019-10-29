import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { LoginService } from '../../services/login.service';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-ingreso-noticia',
  templateUrl: './ingreso-noticia.page.html',
  styleUrls: ['./ingreso-noticia.page.scss'],
})
export class IngresoNoticiaPage implements OnInit {

  noticia = {
    titulo      : '',
    texto       : '',
    estado      : '',
    propietario : '',
    fecha       : new Date()
  };

  titulo = 'Ingreso de noticias';
  botonRegresoCancelar = false;

  constructor(  private menuComponent: MenuComponent, private loginService: LoginService,
                private newsService: NewsService ) { }

  ngOnInit() {
    this.noticia.propietario = this.loginService.datosDetalle[0].nombre;
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
