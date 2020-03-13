import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AlertController } from '@ionic/angular';
import { IngresoNoticiaPage } from '../pages/ingreso-noticia/ingreso-noticia.page';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url: string;
  noticiaRespuesta: any;
  copiaNoticiaRespuesta: any;
  respuestaEnvio: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService,
              private alertController: AlertController) { }

  // esta sección hace una peticion de todas las noticias al usar reload
  async refrescarNoticias(event) {
    this.url = this.loginService.urlServer;
    this.url += 'secretaria/mostrar_noticia';
    // Realiza la petición de los datos para refrescar las noticias
    this.httpClient.get(this.url).subscribe((response: any) => {
      this.noticiaRespuesta = response;
      this.copiaNoticiaRespuesta = this.noticiaRespuesta.noticias.map((x: any) => x);
      // Realiza el termino del evento de recarga de datos
      event.target.complete();
    }, err => {
        console.log(err);
    });
    return 0;
  }

  // Realiza la carga de las noticias pro primera vez para juntar las notas en un array
  async cargarNoticias() {
    this.url = this.loginService.urlServer;
    this.url += 'secretaria/mostrar_noticia';
    this.httpClient.get(this.url).subscribe((response: any) => {
      this.noticiaRespuesta = response;
      this.copiaNoticiaRespuesta = this.noticiaRespuesta.noticias.map((x: any) => x);
    }, err => {
        console.log(err);
    });
    return 0;
  }

  // Realiza un envío de la noticia para crear o editar una noticia
  async sendNew(noticia: any) {
    let url = this.loginService.urlServer;
    url += '/secretaria/agregar_noticia' + '?titulo=' + noticia.titulo + '&texto='
        +   noticia.texto +  '&estado=' +   noticia.estado + '&propietario=' + noticia.propietario
        +   '&id_noticia=' + noticia.id_noticia;
    // envia datos por metodo get
    this.httpClient.get(url).subscribe(async (response: any) => {
        this.respuestaEnvio = response;
        // crea la alerta de envio satisfactorio
        const alert = await this.alertController.create({
          header: 'Enviada',
          message: 'La noticia ha sido enviada con éxito.',
          buttons: ['OK']
        });
        await alert.present();
    }, async err => {
        // mensaje de error por falta de servidor
        const alert = await this.alertController.create({
          header: 'Lo sentimos',
          message: 'La noticia no ha sido publicada por un error interno, intentelo en más tarde.',
          buttons: ['OK']
        });
        await alert.present();
    });
    return 0;
  }

}
