import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  titulo = 'Bienvenido';
  botonRegresoCancelar = true;
  respuesta: any;

  constructor( private menuComponent: MenuComponent, public newsService: NewsService) { }

  ngOnInit() {
  }

  getDate(fecha) {
    const fechasCompleta = fecha.split(' ');
    const fechas = fechasCompleta[0].split('-');
    return fechas;
  }

  getTime(fecha) {
    const fechasCompleta = fecha.split(' ');
    return fechasCompleta[1];
  }

  async refrescarNoticias(event) {
    await this.newsService.refrescarNoticias(event);
  }

}
