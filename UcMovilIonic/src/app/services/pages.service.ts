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
        icon: 'person-add',
        name: 'Asignación de profesores a ramos',
        redirectTo: '/asignacion-profesores-version-ramos'
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
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
    );
  }

}
