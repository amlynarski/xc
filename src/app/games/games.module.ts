import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesListComponent } from './games-list/games-list.component';
import { GameItemComponent } from './games-list/game-item/game-item.component';
import { CategoryItemComponent } from './category-list/category-item/category-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { GamesRoutingModule } from './games-routing.module';



@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [
    GamesListComponent,
    GameItemComponent,
    CategoryListComponent,
    CategoryItemComponent
  ],
  exports: [
    GamesListComponent,
    GameItemComponent,
    CategoryListComponent,
    CategoryItemComponent
  ],
  providers: []
})
export class GamesModule {}
