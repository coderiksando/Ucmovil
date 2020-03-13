import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { NewsService } from '../../services/news.service';
import { LoginService } from '../../services/login.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  titulo = 'Bienvenido';
  botonRegresoCancelar = true;
  respuesta: any;

  constructor(  public menuComponent: MenuComponent, public newsService: NewsService,
                public loginService: LoginService, public alertController: AlertController,
                public httpClient: HttpClient, public staticDataService: StaticDataService,
                public router: Router) { }

  ngOnInit() {
  }

  // Obtiene la fecha del servidor de un DateTime
  getDate(fecha) {
    const fechasCompleta = fecha.split(' ');
    const fechas = fechasCompleta[0].split('-');
    return fechas;
  }

  // Obtiene el tiempo del servidor de un DateTime
  getTime(fecha) {
    const fechasCompleta = fecha.split(' ');
    return fechasCompleta[1];
  }

  // Refresca las noticias a través de una función de un servicio
  async refrescarNoticias(event) {
    await this.newsService.refrescarNoticias(event);
  }

  // Redirige a la pagina de ingreso de noticias y carga los datos para editar
  edit( noticia ) {
    this.staticDataService.noticiaObjetoEditar = noticia;
    this.router.navigateByUrl('ingreso-noticia');
  }

  // Envía por metodo get la noticia que debe eliminarse
  async delete( noticia ) {
    const alert = await this.alertController.create({
      header: 'Borrar noticia',
      message: 'Seguro quiere eliminar esta noticia?',
      buttons: ['No', {
        text: 'Si, borrar',
        handler: () => {
          let url = this.loginService.urlServer;
          url += '/secretaria/borrar_noticia?id=' + noticia.id_noticia;
          this.httpClient.get(url).subscribe((response: any) => {
            this.newsService.cargarNoticias();
          });
        }}]
    });
    await alert.present();
  }

}
