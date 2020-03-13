import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService  {

  // Se realiza una inicilización de las páginas, iniciando con el perfil,
  // ya que es necesario en todos los roles
  componentes: any = [
    {
      icon: 'person',
      name: 'Perfil',
      redirectTo: '/perfil'
    }
  ];

  constructor() { }

  // Ajusta las paginas de alumnos con sus 3 componentes necesarios, icono, nombre y redirección
  // deben estar ingresados estas paginas en app-routing.module.ts
  paginaAlumno() {
    this.componentes.length = 1;
    this.componentes.push(
      {
        icon: 'chatboxes',
        name: 'Chat',
        redirectTo: '/chat'
      },
      {
        icon: 'stats',
        name: 'Notas asignatura',
        redirectTo: '/notas-alumnos'
      },
      {
        icon: 'folder-open',
        name: 'Historial de asignaturas',
        redirectTo: '/hist-asignatura'
      },
      {
        icon: 'power',
        name: 'Finalizar sesión',
        redirectTo: '/login'
      }
    );
  }

  // Ajusta las paginas de profesor
  paginaProfesor() {
    this.componentes.length = 1;
    this.componentes.push(
      {
        icon: 'chatboxes',
        name: 'Chat',
        redirectTo: '/chat'
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

  // Ajusta las paginas de director
  paginaDirector() {
    this.componentes.length = 1;
    this.componentes.push(
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
      }
    );
  }

  // Ajusta las paginas de secretaria
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
