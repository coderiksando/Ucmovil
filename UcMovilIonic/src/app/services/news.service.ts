import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url: string;
  noticiaRespuesta: any;
  respuestaEnvio: any;

  constructor(private httpClient: HttpClient, private loginService: LoginService,
              private alertController: AlertController) { }

  async refrescarNoticias(event) {
    this.url = this.loginService.urlServer;
    this.url += 'secretaria/mostrar_noticia';
    this.httpClient.get(this.url).subscribe((response: any) => {
      this.noticiaRespuesta = response;
      event.target.complete();
    }, err => {
        console.log(err);
    });
    return 0;
  }

  async cargarNoticias() {
    this.url = this.loginService.urlServer;
    this.url += 'secretaria/mostrar_noticia';
    this.httpClient.get(this.url).subscribe((response: any) => {
      this.noticiaRespuesta = response;
    }, err => {
        console.log(err);
    });
    return 0;
  }

  async sendNew(noticia: any) {
    let url = this.loginService.urlServer;
    url += '/secretaria/agregar_noticia' + '?titulo=' + noticia.titulo + '&texto='
        +   noticia.texto +  '&estado=' +   noticia.estado + '&propietario=' + noticia.propietario;
    console.log(url);
    this.httpClient.get(url).subscribe(async (response: any) => {
        this.respuestaEnvio = response;
        const alert = await this.alertController.create({
          header: 'Enviada',
          message: 'La noticia ha sido enviada con éxito.',
          buttons: ['OK']
        });
        await alert.present();
    }, async err => {
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
