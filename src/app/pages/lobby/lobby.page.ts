import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  titulo = 'Bienvenido';
  botonRegresoCancelar = true;

  constructor( private menuComponent: MenuComponent ) { }

  ngOnInit() {
  }

}
