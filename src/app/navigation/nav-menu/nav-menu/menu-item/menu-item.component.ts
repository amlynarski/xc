import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NavigationService } from '../../../navigation.service';
import { Category } from '../../../../games/shared/category.model';

@Component({
  selector: 'app-left-nav-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent implements OnInit {
  @Input() element: Category;
  @Output() selected = new EventEmitter<Category | null>();

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {}

  selectElement() {
    this.selected.emit(this.element);
  }
}
