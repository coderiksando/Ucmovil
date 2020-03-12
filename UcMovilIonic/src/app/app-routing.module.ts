import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // redirección de paginas no fijadas
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Pagina de inicio
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // pagina contenedora de noticias y espera comun de roles
  { path: 'lobby', loadChildren: './pages/lobby/lobby.module#LobbyPageModule', data: {preload: true, name: 'lobby'}},
  // pagina de perfil común entre roles
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  // pagina de director y secretaria de ingreso de noticias
  { path: 'ingreso-noticia', loadChildren: './pages/ingreso-noticia/ingreso-noticia.module#IngresoNoticiaPageModule' },
  // pagina de director de ingreso de versiones de asignatura con profesor vinculado
  // tslint:disable-next-line: max-line-length
  { path: 'ingreso-version-asignatura', loadChildren: './pages/ingreso-version-asignatura/ingreso-version-asignatura.module#IngresoVersionAsignaturaPageModule' },
  // modals vinculados a ingreso de versiones de asignatura (podrían ser utilizados en otra pagina)
  { path: 'modal-profesor', loadChildren: './modals/modal-profesor/modal-profesor.module#ModalProfesorPageModule' },
  { path: 'modal-ramo', loadChildren: './modals/modal-ramo/modal-ramo.module#ModalRamoPageModule' },
  // pagina de vista de notas de alumnos
  { path: 'notas-alumnos', loadChildren: './pages/notas-alumnos/notas-alumnos.module#NotasAlumnosPageModule' },
  // pagina de asignación de salas para el rol de director y secretaria
  { path: 'asignacion-sala', loadChildren: './pages/asignacion-sala/asignacion-sala.module#AsignacionSalaPageModule' },
  { path: 'modal-sala', loadChildren: './modals/modal-sala/modal-sala.module#ModalSalaPageModule' },
  { path: 'ramos-impartidos', loadChildren: './pages/ramos-impartidos/ramos-impartidos.module#RamosImpartidosPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'ingreso-ponderaciones', loadChildren: './pages/ingreso-ponderaciones/ingreso-ponderaciones.module#IngresoPonderacionesPageModule' },
  { path: 'ingreso-notas', loadChildren: './pages/ingreso-notas/ingreso-notas.module#IngresoNotasPageModule' },
  { path: 'hist-asignatura', loadChildren: './pages/hist-asignatura/hist-asignatura.module#HistAsignaturaPageModule' },

  //Chat
  
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'mensajes', loadChildren: './pages/mensajes/mensajes.module#MensajesPageModule' },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
