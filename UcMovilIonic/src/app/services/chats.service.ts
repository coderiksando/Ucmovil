import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AlertController } from '@ionic/angular';
import { StaticDataService } from './static-data.service';
import { Router } from '@angular/router';
import { AppRoutingPreloaderService } from '../services/app-routing-preloader.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  url: string;

  constructor(private httpClient: HttpClient, private loginService: LoginService,
              private staticDataService: StaticDataService, private routingService: AppRoutingPreloaderService,
              private alertController: AlertController,
              private router: Router) { }
  
  async sendingChats(Text: string, id: string){
    let url = this.loginService.urlServer 
    + "/Mensaje?id_remitente=" + id + "&id_destinatario=" + this.staticDataService.chatsALeer.id_asignatura 
    + "&texto=" + Text + "&tipo_remitente=" + this.loginService.datos.usuarios[0].tipo
    + "&nombre=" + this.loginService.datosDetalle[0].nombre;
    this.httpClient.get(url).subscribe((response: any) => {
      this.routingService.preloadRoute('chat');
      this.router.navigateByUrl('/chat');
      console.log(url);
    }, err => {
      console.log(err);
    });
  }


  async cargarMensajes(id: string){
  }
  
}
