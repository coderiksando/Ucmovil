import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // Se crea un componente el cual tiene la opcion de poder abrir y usar una barra de busqueda de noticias

  @Input() titulo: string;

  showMe = false;
  busqueda = true;
  noticiaArrayOriginal: any;
  noBorrar = [];
  borrar = [];

  constructor( private menuComponent: MenuComponent, private newsService: NewsService ) { }

  ngOnInit() {
  }

  // Llama al componente menu
  clickMenu() {
    this.menuComponent.openFirst();
  }

  // Abre la barra de busqueda o la cierra dependiendo de su actual situacion
  search() {
    if (this.showMe === false) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  }

  // Realiza un filtro de acuerdo a la palabra que deba buscarse
  busquedaEvento(event) {
    if (event.target.value.length > 0) {
      this.newsService.noticiaRespuesta.noticias = this.newsService.copiaNoticiaRespuesta.map( (x: any) => x);
      this.noBorrar = [];
      this.borrar = [];
      let nNoticia = 0;
      // realiza una consulta del largo de la palabra buscada, siendo solo activada después de 0 letras
      if (event.target.value.length !== 0) {
        // revisa en cada objeto del array de noticias
        this.newsService.noticiaRespuesta.noticias.forEach(noticia => {
          // busca en cada atributo del objeto siendo de baja importancia los valores como id_noticia, etc
          for (const elementoNoticia in noticia) {
            if (elementoNoticia !== 'tag' && elementoNoticia !== 'estado' &&
                elementoNoticia !== 'id_noticia' && elementoNoticia !== 'created_at') {
              // Revisa que los datos strings de los atributos sean iguales a la palabra buscada sin importar mayusculas
              if (noticia[elementoNoticia].toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0) {
                if (this.noBorrar[this.noBorrar.length - 1] !== nNoticia) {
                  // se crea un array con objetos que no deben borrarse
                  this.noBorrar.push(nNoticia);
                }
              }
            }
          }
          nNoticia += 1;
        });
        // se agregan los indices del array de objetos que si deben borrarse
        for (let index = 0; index < this.newsService.noticiaRespuesta.noticias.length ; index++) {
          if (this.noBorrar.indexOf(index) === -1) {
            this.borrar.push(index);
          }
        }
      }
      // realiza la acción si existen cosas que borrar
      if (this.borrar.length > 0) {
        let aux = 0;
        // realiza el borrado
        this.borrar.forEach(element => {
          this.newsService.noticiaRespuesta.noticias.splice(element - aux, 1);
          aux += 1;
        });
      }
    } else {
      this.newsService.noticiaRespuesta.noticias = this.newsService.copiaNoticiaRespuesta.map( (x: any) => x);;
    }
  }

}
