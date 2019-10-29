import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsignacionProfesoresVersionRamosPage } from './asignacion-profesores-version-ramos.page';

const routes: Routes = [
  {
    path: '',
    component: AsignacionProfesoresVersionRamosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AsignacionProfesoresVersionRamosPage]
})
export class AsignacionProfesoresVersionRamosPageModule {}
