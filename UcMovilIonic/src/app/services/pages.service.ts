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
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      },
      {
        icon: 'business',
        name: 'Ramos Impartidos',
        redirectTo: '/ramos-impartidos'
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
        icon: 'compass',
        name: 'Asignación de salas',
        subElemento: [
          {
            icon: 'compass',
            name: 'Asignación de salas',
            redirectTo: '/asignacion-sala'
          },
          {
            icon: 'compass',
            name: 'Asignación de salas',
            redirectTo: '/asignacion-sala'
          },
          {
            icon: 'compass',
            name: 'Asignación de salas',
            redirectTo: '/asignacion-sala'
          }
        ]
      },
      {
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
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
