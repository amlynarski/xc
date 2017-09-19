import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from '../../../shared/menu-item.model';
import { NavigationService } from '../../../navigation.service';

@Component({
  selector: 'app-left-nav-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent implements OnInit {
  @Input() element: MenuItem;
  @Input() isSelected: boolean;
  @Input() isAnySelected: boolean;
  @Output() selected = new EventEmitter<MenuItem | null>();
  iconClassName: string;
  back = 'Back';

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.getElementIconClass();
  }

  selectElement() {
    if (!this.isSelected) {
      this.selected.emit(this.element);
    } else {
      this.selected.emit(null);
    }
  }

  private getElementIconClass() {
    this.iconClassName = this.navigationService.getElementIconClass(this.element.icon);
  }

}
