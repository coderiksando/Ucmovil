import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
