import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IngresoNoticiaPage } from './ingreso-noticia.page';
import { ComponentsModule } from '../../components/components.module';
import { LobbyPage } from '../lobby/lobby.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoNoticiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [IngresoNoticiaPage]
})
export class IngresoNoticiaPageModule {}
