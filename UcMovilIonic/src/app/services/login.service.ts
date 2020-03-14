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
  // php artisan serve --host=192.168.0.2 --port=8000
  // url de tu ipconfig conexion de area local direccion IPv4
  // esta sección es importante, debido a que importaremos esta URL desde todos lados
  urlServer = 'http://192.168.0.2:8000/';
  cordova: any;
  params = {};
  headers = {};

  isLoading = true;
  error = true;
  loading: any;

  constructor(private http: HttpClient, private loadingController: LoadingController,
              private alertController: AlertController, private routingService: AppRoutingPreloaderService,
              private router: Router) { }

  // Inicia un sistema de carga para la espera de los datos del usuario
  async presentLoadingWithOptions() {
    this.loading = await this.loadingController.create({
      message: 'Espere un momento...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
      });
    });
  }

  // Crea una alerta que se presenta cuando no puede realizarse una verificacion de los datos por datos erroneos
  async wrongDataAlert() {
    const alert = await this.alertController.create({
      header: 'Datos erroneos',
      subHeader: 'Por favor, inténtelo otra vez',
      message: 'Su cuenta o clave es erronea',
      buttons: [{
        text: 'Ayuda',
        handler: () => {
        }}, 'Reintentar']
    });
    await alert.present();
  }

  // Crea una alerta por no disponibilidad del servidor
  async conectionErrorAlert(err) {
    const alert = await this.alertController.create({
      header: 'Sin conexión',
      subHeader: 'Hemos tenido un error',
      message: 'No hay conexión momentaneamente, intentelo otra vez',
      buttons: ['Ok']
    });
    await alert.present();
  }

  // Realiza una redirección a la pagina lobby
  cargaLobby() {
    this.routingService.preloadRoute('lobby');
  }

  // Realiza una petición de los datos según tipo de rol del usuario
  accountDetails(datoUsuario) {
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

  // Función de login que obtiene en arreglos todos los datos necesarios para el 
  async logAccount(user: string, password: string) {
    await this.presentLoadingWithOptions();
    let url = this.urlServer;
    url += 'log?email=' + user + '&password=' + password;
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
