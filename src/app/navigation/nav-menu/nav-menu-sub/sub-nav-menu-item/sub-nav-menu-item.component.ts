import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../shared/sub-menu-item.model';
import { NavigationService } from '../../../navigation.service';

@Component({
  selector: 'app-sub-nav-menu-item',
  templateUrl: './sub-nav-menu-item.component.html',
  styleUrls: ['./sub-nav-menu-item.component.sass']
})
export class SubNavMenuItemComponent implements OnInit {
  @Input() subItem: SubMenuItem;
  thumbPath: string;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.thumbPath = this.setThumbPath(this.subItem.thumb);
  }

  navigateTo() {
    this.navigationService.navigateTo(this.subItem.href);
  }

  private setThumbPath(name: string | null) {
    return name ? this.navigationService.getThumbFullPath(name) : '';
  }

}
