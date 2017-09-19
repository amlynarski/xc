import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu/nav-menu.component';
import { NavMenuSubComponent } from './nav-menu/nav-menu-sub/nav-menu-sub.component';
import { MenuItemComponent } from './nav-menu/nav-menu/menu-item/menu-item.component';
import { SubNavMenuItemComponent } from './nav-menu/nav-menu-sub/sub-nav-menu-item/sub-nav-menu-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    NavMenuComponent,
    NavMenuSubComponent,
    MenuItemComponent,
    SubNavMenuItemComponent
  ],
  exports: [
    NavBarComponent,
    NavMenuComponent,
    NavMenuSubComponent,
    MenuItemComponent,
    SubNavMenuItemComponent
  ],
  providers: []
})
export class NavigationModule {}
