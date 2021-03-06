import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StaticDataService } from 'src/app/services/static-data.service';
import { ChatsService } from '../../services/chats.service';
import { v4 } from 'uuid';
import { ItemCollapsableComponent } from 'src/app/components/item-collapsable/item-collapsable.component';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  titulo = 'Mensajes';
  mensajesRespuesta: any;

  Mensaje = {
    Text: '',
    Id: ''
  }
  
  constructor(public menuComponent: MenuComponent,
    public loginService: LoginService, public router: Router,
    public ChatsService: ChatsService,
    public httpClient: HttpClient, public staticDataService: StaticDataService) { }

  ngOnInit() {
    if (this.staticDataService.chatsALeer != undefined){
      this.titulo += " " + this.staticDataService.chatsALeer.nombre;
    }

    let url = this.loginService.urlServer;
    if(this.loginService.datos.usuarios[0].tipo == "alumno")
      url += 'alumnos' ;
    if(this.loginService.datos.usuarios[0].tipo == "profesor")
      url += 'profesores' ;
    url += '/MensajesC?id_destinatario=' + this.staticDataService.chatsALeer.id_asignatura;
    this.httpClient.get(url).subscribe((response: any) => {
      console.log(url);
      this.mensajesRespuesta = response;
    }, err => {
      console.log(url);
      console.log(err);
    });
  }

  async sendMessages() {
    await this.ChatsService.sendingChats(this.Mensaje.Text, this.loginService.datos.usuarios[0].id);
  }
  
}
