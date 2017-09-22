import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../navigation.service';
import { GamesService } from '../../../games/games.service';
import animations from '../navigation.animations';
import { Category } from '../../../games/shared/category.model';


@Component({
  selector: 'app-nav-menu-left',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['../navigation.sass', './nav-menu.component.sass'],
  animations: animations
})
export class NavMenuComponent implements OnInit {
  categories: Category[];
  showSpinner = false;

  constructor(private navigationService: NavigationService,
              private gamesService: GamesService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getCategories();
  }

  onElementSelect(category: Category) {
    this.navigationService.navigateTo(`/categories/${category.slug}`);
  }

  private getCategories() {
    this.gamesService.getCategories()
      .finally(() => this.showSpinner = false)
      .subscribe(
        response => this.categories = response._embedded.game_categories
      );
  }

}
