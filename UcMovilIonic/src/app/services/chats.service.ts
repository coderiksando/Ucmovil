import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  chatRespuesta : any;
  url: string;

  constructor(private httpClient: HttpClient, private loginService: LoginService,
              private alertController: AlertController) { }
  
  
}
