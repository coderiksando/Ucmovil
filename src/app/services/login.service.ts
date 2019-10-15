import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingPreloaderService } from '../services/app-routing-preloader.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  datos: any;
  urlServer: string;
  cordova: any;
  params = {};
  headers = {};

  isLoading = true;
  error = true;
  loading: any;

  constructor(private http: HttpClient, private loadingController: LoadingController,
              private alertController: AlertController, private routingService: AppRoutingPreloaderService,
              private router: Router) { }

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

  async cargaLobby() {
    this.routingService.preloadRoute('lobby');
  }

  logAccount(user: string, password: string) {
    this.presentLoadingWithOptions();
    this.urlServer = 'http://localhost:8000/log' + '?email=' + user + '&password=' + password;
    this.http.get(this.urlServer).subscribe((response: any) => {
      setTimeout(() => {
        this.datos = response;
        this.isLoading = false;
        this.loadingController.dismiss();
        this.cargaLobby();
        this.router.navigateByUrl('/lobby');
      }, 500);
    }, err => {
        this.loadingController.dismiss();
        if (err.error.text === 'no') {
          this.wrongDataAlert();
        } else {
          this.conectionErrorAlert();
        }
    });
    this.urlServer = 'http://localhost:8000/';
    console.log(this.urlServer);
  }
}
