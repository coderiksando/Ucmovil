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
  datosDetalle: any;
   urlServer = 'http://127.0.0.1:8000/';
  // php artisan serve --host=192.168.0.6 --port=8000
  // urlServer = 'http://192.168.0.1:8000/';
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
        // console.log('esperando conexión...');
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
          // console.log('Aiuuuuda por favoooor');
        }}, 'Reintentar']
    });
    await alert.present();
  }

  async conectionErrorAlert(err) {
    const alert = await this.alertController.create({
      header: 'Sin conexión',
      subHeader: 'Hemos tenido un error',
      message: 'No hay conexión momentaneamente, intentelo otra vez',
      buttons: ['Ok']
    });
    await alert.present();
  }

  cargaLobby() {
    this.routingService.preloadRoute('lobby');
  }

  accountDetails(datoUsuario) {
    // console.log(datoUsuario.usuarios[0]);
    let tipoUsuario = datoUsuario.usuarios[0].tipo;
    let url = this.urlServer;
    if (tipoUsuario === 'alumno') {
      tipoUsuario = 'alumnos';
      url += 'datos_a';
    }
    if (tipoUsuario === 'profesor') {
      tipoUsuario = 'profesores';
      url += 'datos_p';
    }
    if (tipoUsuario === 'secretaria') {
      tipoUsuario = 'secretarias';
      url += 'datos_s';
    }
    if (tipoUsuario === 'director_carrera') {
      tipoUsuario = 'directores_carreras';
      url += 'datos_d';
    }
    url += '?id=' + datoUsuario.usuarios[0].id + '&tipo=' + tipoUsuario;
    this.http.get(url).subscribe((response: any) => {
      this.datosDetalle = response;
      // cambios de pantalla solo deben ocurrir una vez todos los datos estén cargados
      this.router.navigateByUrl('/lobby');
    });
  }

  async logAccount(user: string, password: string) {
    await this.presentLoadingWithOptions();
    let url = this.urlServer;
    url += 'log?email=' + user + '&password=' + password;
    console.log(url);
    this.http.get(url).subscribe(async (response: any) => {
      this.datos = response;
      this.isLoading = false;
      await this.loadingController.dismiss();
      this.accountDetails(response);
    }, async err => {
      await this.loadingController.dismiss();
      if (err.error.text === 'no') {
        this.wrongDataAlert();
      } else {
        this.conectionErrorAlert(err);
      }
    });
    url = this.urlServer;
  }
}
