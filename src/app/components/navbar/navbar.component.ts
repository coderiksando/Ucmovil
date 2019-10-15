import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() titulo: string;

  constructor( private menuComponent: MenuComponent ) { }

  ngOnInit() {}

  clickMenu() {
    this.menuComponent.openFirst();
  }

  search() {
    console.log('buscar');
  }

}
