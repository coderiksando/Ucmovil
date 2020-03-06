import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService  {

  componentes: any = [
    {
      icon: 'person',
      name: 'Perfil',
      redirectTo: '/perfil'
    }
  ];

  constructor() { }

  paginaAlumno() {
    this.componentes.length = 1;
    this.componentes.push(
      {
        icon: 'alert',
        name: 'Alumno',
        redirectTo: '/noValido'
      },
      {
        icon: 'stats',
        name: 'Notas asignatura',
        redirectTo: '/notas-alumnos'
      },
      {
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
    );
  }

  paginaProfesor() {
    this.componentes.length = 1;
    this.componentes.push(
      {
        icon: 'alert',
        name: 'Profesor',
        redirectTo: '/noValido'
      },
      {
        icon: 'business',
        name: 'Ramos Impartidos',
        redirectTo: '/ramos-impartidos'
      },
      {
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
    );
  }

  paginaDirector() {
    this.componentes.length = 1;
    this.componentes.push(
      {
        icon: 'alert',
        name: 'Director',
        redirectTo: '/noValido'
      },
      {
        icon: 'paper',
        name: 'Ingreso de noticias',
        redirectTo: '/ingreso-noticia'
      },
      {
        icon: 'bookmarks',
        name: 'Ingreso de versiones de ramos',
        redirectTo: '/ingreso-version-asignatura'
      },
      {
        icon: 'compass',
        name: 'Asignación de salas',
        redirectTo: '/asignacion-sala'
      },
      {
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }/*,
      {
        icon: 'compass',
        name: 'XXX',
        subElemento: [
          {
            name: 'XXXXXXXX',
            redirectTo: '/asignacion-sala'
          },
          {
            name: 'XXXXXXXX',
            redirectTo: '/asignacion-sala'
          },
          {
            name: 'XXXXXXXX',
            redirectTo: '/asignacion-sala'
          }
        ]
      },
      {
        icon: 'compass',
        name: 'YYY',
        subElemento: [
          {
            name: 'YYYYYYYY',
            redirectTo: '/asignacion-sala'
          },
          {
            name: 'YYYYYYYY',
            redirectTo: '/asignacion-sala'
          },
          {
            name: 'YYYYYYYY',
            redirectTo: '/asignacion-sala'
          }
        ]
      }*/
    );
  }

  paginaSecretaria() {
    this.componentes.length = 1;
    this.componentes.push(
      {
        icon: 'alert',
        name: 'Secretaria',
        redirectTo: '/noValido'
      },
      {
        icon: 'paper',
        name: 'Ingreso de noticias',
        redirectTo: '/ingreso-noticia'
      },
      {
        icon: 'compass',
        name: 'Asignación de salas',
        redirectTo: '/asignacion-sala'
      },
      {
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
    );
  }

}
