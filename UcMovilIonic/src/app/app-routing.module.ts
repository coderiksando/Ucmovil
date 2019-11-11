import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lobby', loadChildren: './pages/lobby/lobby.module#LobbyPageModule', data: {preload: true, name: 'lobby'}},
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'ingreso-noticia', loadChildren: './pages/ingreso-noticia/ingreso-noticia.module#IngresoNoticiaPageModule' },
  { path: 'ingreso-version-asignatura', loadChildren: './pages/ingreso-version-asignatura/ingreso-version-asignatura.module#IngresoVersionAsignaturaPageModule' },
  { path: 'asignacion-profesores-version-ramos', loadChildren: './pages/asignacion-profesores-version-ramos/asignacion-profesores-version-ramos.module#AsignacionProfesoresVersionRamosPageModule' },
  { path: 'modal-profesor', loadChildren: './modals/modal-profesor/modal-profesor.module#ModalProfesorPageModule' },
  { path: 'modal-ramo', loadChildren: './modals/modal-ramo/modal-ramo.module#ModalRamoPageModule' },
  { path: 'ramos-impartidos', loadChildren: './pages/ramos-impartidos/ramos-impartidos.module#RamosImpartidosPageModule' },
  { path: 'ingreso-ponderaciones', loadChildren: './pages/ingreso-ponderaciones/ingreso-ponderaciones.module#IngresoPonderacionesPageModule' },

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
  { path: 'ingreso-version-asignatura', loadChildren: './pages/ingreso-version-asignatura/ingreso-version-asignatura.module#IngresoVersionAsignaturaPageModule' },
  // modals vinculados a ingreso de versiones de asignatura (podrían ser utilizados en otra pagina)
  { path: 'modal-profesor', loadChildren: './modals/modal-profesor/modal-profesor.module#ModalProfesorPageModule' },
  { path: 'modal-ramo', loadChildren: './modals/modal-ramo/modal-ramo.module#ModalRamoPageModule' },
  // pagina de vista de notas de alumnos
  { path: 'notas-alumnos', loadChildren: './pages/notas-alumnos/notas-alumnos.module#NotasAlumnosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
