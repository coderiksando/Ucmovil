import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ModalProfesorPageModule } from './modal-profesor/modal-profesor.module';
import { ModalRamoPageModule } from './modal-ramo/modal-ramo.module';
import { ModalSalaPageModule } from './modal-sala/modal-sala.module';

@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    ModalProfesorPageModule,
    ModalRamoPageModule,
    ModalSalaPageModule,
    RouterModule,
    CommonModule,
    IonicModule
  ]
})
export class ModalsModule { }
