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


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
