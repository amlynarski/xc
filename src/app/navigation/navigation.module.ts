import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu/nav-menu.component';
import { MenuItemComponent } from './nav-menu/nav-menu/menu-item/menu-item.component';
import { XcComponentsModule } from '../xc-components/xc-components.module';

@NgModule({
  imports: [
    CommonModule,
    XcComponentsModule
  ],
  declarations: [
    NavBarComponent,
    NavMenuComponent,
    MenuItemComponent
  ],
  exports: [
    NavBarComponent,
    NavMenuComponent,
    MenuItemComponent
  ],
  providers: []
})
export class NavigationModule {}
