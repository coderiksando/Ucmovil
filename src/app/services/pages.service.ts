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
    if (this.componentes.length === 1) {
      this.componentes.push(
        {
          icon: 'alert',
          name: 'No implementado',
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

  paginaProfesor() {

  }

  paginaDirector() {

  }

  paginaSecretaria() {

  }

}
interface Pagina {
  icon: string;
  name: string;
  redirectTo: string;
}
