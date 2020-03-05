import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { StaticDataService } from '../../services/static-data.service';
import { LobbyPage } from '../lobby/lobby.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  titulo = 'Chats Disponibles';
  botonRegresoCancelar = false;
  chatsRespuesta : any;

  constructor(public menuComponent: MenuComponent,
    public loginService: LoginService, public router: Router,
    public httpClient: HttpClient, public staticDataService: StaticDataService) { }

  async ngOnInit() {
    let url = this.loginService.urlServer;
    url += 'alumnos/MensajeriaC' + '?id=' + this.loginService.datos.usuarios[0].id;
    this.httpClient.get(url).subscribe((response: any) => {
      this.chatsRespuesta = response;
    }, err => {
      console.log(err);
    });

  }
  
  entrar( item ){
    this.staticDataService.chatsALeer = item;
    this.router.navigateByUrl('mensajes');
  }
}
