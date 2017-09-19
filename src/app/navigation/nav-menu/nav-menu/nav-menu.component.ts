import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../shared/menu-item.model';
import { NavigationService } from '../../navigation.service';
import animations from '../navigation.animations';

@Component({
  selector: 'app-nav-menu-left',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['../navigation.sass', './nav-menu.component.sass'],
  animations: animations
})
export class NavMenuComponent implements OnInit {
  menuItems: MenuItem[];
  selectedElement: MenuItem | null = null;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getMenuItems();
    this.selectedElement = this.navigationService.getSelectedElement();
    this.navigationService.selectedElementChange()
      .subscribe(
        selectedElement => this.selectedElement = selectedElement
      );
  }

  onElementSelect(element: MenuItem) {
    this.navigationService.selectElement(element);
  }

  closeNav() {
    this.navigationService.close();
  }

  private getMenuItems() {
    this.navigationService.getNavigationElements()
      .subscribe(
        response => this.menuItems = response.menu
      );
  }

}
