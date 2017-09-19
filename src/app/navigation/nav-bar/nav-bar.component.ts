import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

import { MenuItem } from '../shared/menu-item.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  toggleNavMenu() {
    this.navigationService.toggleNav();
  }

  openNavigationElement(element: MenuItem) {
    this.navigationService.selectElement(element);
  }

  private getMenuItems() {
    this.navigationService.getNavigationElements()
      .subscribe(
        response => this.setMainMenuItems(response.menu, response.main)
      );
  }

  private setMainMenuItems(menu: MenuItem[], mainIds: number[]) {
    this.menuItems = menu.filter( ({id}) => !!mainIds.find(mainId => mainId === id));
  }

}
