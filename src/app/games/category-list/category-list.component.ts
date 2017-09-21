import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../shared/category.model';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() { // todo implement some loader
    this.gamesService.getCategories()
      .subscribe(
        response => this.categories = response._embedded.game_categories
      );
  }

  selectCategory(category: Category) {
    this.router.navigate([`categories/${category.slug}`]);
  }
}
