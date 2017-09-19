import { Component, Input, OnInit } from '@angular/core';

import { MenuItem } from '../../shared/menu-item.model';
import animations from '../navigation.animations';

@Component({
  selector: 'app-nav-menu-left-sub',
  templateUrl: './nav-menu-sub.component.html',
  styleUrls: ['../navigation.sass', './nav-menu-sub.component.sass'],
  animations: animations
})
export class NavMenuSubComponent implements OnInit {
  @Input() navElement: MenuItem;
  constructor() { }

  ngOnInit() {
  }

}
