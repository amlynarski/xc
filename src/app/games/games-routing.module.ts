import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { GamesListComponent } from './games-list/games-list.component';

const gamesRoutes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent,
    children: [
      {
        path: ':name',
        component: GamesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(gamesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GamesRoutingModule {}
