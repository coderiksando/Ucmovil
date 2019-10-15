import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService  {

  componentes: Pagina[] = [
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
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
    );
  }

}
interface Pagina {
  icon: string;
  name: string;
  redirectTo: string;
}
