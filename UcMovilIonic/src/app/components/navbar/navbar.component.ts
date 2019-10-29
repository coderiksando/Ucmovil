import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() titulo: string;

  showMe = false;
  busqueda = true;
  noticiaArrayOriginal: any;
  noBorrar = [];
  borrar = [];

  constructor( private menuComponent: MenuComponent, private newsService: NewsService ) { }

  ngOnInit() {
    this.noticiaArrayOriginal = JSON.parse(JSON.stringify(this.newsService.noticiaRespuesta.noticias));
  }

  clickMenu() {
    this.menuComponent.openFirst();
  }

  search() {
    if (this.showMe === false) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  }

  busquedaEvento(event) {
    this.newsService.noticiaRespuesta.noticias = JSON.parse(JSON.stringify(this.noticiaArrayOriginal));
    this.noBorrar = [];
    this.borrar = [];
    let nNoticia = 0;
    if (event.target.value.length !== 0) {
      this.newsService.noticiaRespuesta.noticias.forEach(noticia => {
        for (const elementoNoticia in noticia) {
          if (elementoNoticia !== 'tag' && elementoNoticia !== 'estado' &&
              elementoNoticia !== 'id_noticia' && elementoNoticia !== 'created_at') {
            if (noticia[elementoNoticia].indexOf(event.target.value) >= 0) {
              if (this.noBorrar[this.noBorrar.length - 1] !== nNoticia) {
                this.noBorrar.push(nNoticia);
              }
            }
          }
        }
        nNoticia += 1;
      });
      for (let index = 0; index < this.newsService.noticiaRespuesta.noticias.length ; index++) {
        if (this.noBorrar.indexOf(index) === -1) {
          this.borrar.push(index);
        }
      }
    }
    if (this.borrar.length > 0) {
      let aux = 0;
      this.borrar.forEach(element => {
        this.newsService.noticiaRespuesta.noticias.splice(element - aux, 1);
        aux += 1;
      });
    }
  }

}
