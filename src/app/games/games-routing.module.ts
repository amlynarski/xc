import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameComponent } from './game/game.component';

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
  },
  {
    path: 'games/:id',
    component: GameComponent,
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
