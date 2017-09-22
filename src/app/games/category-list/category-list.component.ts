import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { GamesService } from '../games.service';

const CATEGORY_URL = '/categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  showSpinner: boolean;

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getCategories();
  }

  getCategories() {
    this.gamesService.getCategories()
      .finally(() => this.showSpinner = false)
      .subscribe(
        response => this.setCategories(response._embedded.game_categories)
      );
  }

  selectCategory(category: Category) {
    this.router.navigate([`categories/${category.slug}`]);
  }

  private setCategories(categories: Category[]) {
    this.categories = categories;
    if (this.router.routerState.snapshot.url === CATEGORY_URL && this.categories.length !== 0) {

      // if we had static routes it would be located in routing file with redirect
      this.selectCategory(this.categories[0]);
    }
  }
}
