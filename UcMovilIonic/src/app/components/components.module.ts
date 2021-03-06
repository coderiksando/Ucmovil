import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { ItemCollapsableComponent } from './item-collapsable/item-collapsable.component';
import { CollapsableGradeComponent } from './collapsable-grade/collapsable-grade.component';
import { CollapsableHistComponent } from './collapsable-hist/collapsable-hist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent,
    CollapsableComponent,
    ItemCollapsableComponent,
    CollapsableGradeComponent,
    CollapsableHistComponent
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NavbarComponent,
    CollapsableComponent,
    ItemCollapsableComponent,
    CollapsableGradeComponent,
    CollapsableHistComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
