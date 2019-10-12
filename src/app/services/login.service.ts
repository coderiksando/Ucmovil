import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlServer: string;
  cordova: any;
  params = {};
  headers = {};

  isLoading = true;
  error = true;
  loading: any;

  constructor(private http: HttpClient, private loadingController: LoadingController,
              private alertController: AlertController ) { }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      message: 'Espere un momento...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        console.log('esperando conexión...');
      });
    });
  }

  async wrongDataAlert() {
    const alert = await this.alertController.create({
      header: 'Datos erroneos',
      subHeader: 'Por favor, inténtelo otra vez',
      message: 'Su cuenta o clave es erronea',
      buttons: [{
        text: 'Ayuda',
        handler: () => {
          console.log('Aiuuuuda por favoooor');
        }}, 'Reintentar']
    });
    await alert.present();
  }

  async conectionErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Sin conexión',
      subHeader: 'Hemos tenido un error',
      message: 'No hay conexión momentaneamente, intentelo otra vez',
      buttons: ['Ok']
    });
    await alert.present();
  }

  logAccount(user: string, password: string) {
    this.presentLoadingWithOptions();
    this.urlServer = 'http://localhost:8000/log' + '?email=' + user + '&password=' + password;
    this.http.get(this.urlServer).subscribe((response: any) => {
      setTimeout(() => {
        console.log(response);
        this.isLoading = false;
        this.loadingController.dismiss();
      }, 500);
    }, err => {
        this.loadingController.dismiss();
        if (err.error.text === 'no') {
          this.wrongDataAlert();
        } else {
          this.conectionErrorAlert();
        }
    });
  }
}
