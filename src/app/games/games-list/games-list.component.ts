import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from '../games.service';
import { Game } from '../shared/game.model';

const EMPTY_IMAGE_NAME_PATH = '/assets/img/cards-empty-img.gif';
const ANIMATION_TIMEOUT = 10;

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.sass']
})
export class GamesListComponent implements OnInit {
  games: Game[];
  emptyGames: Game[];

  a = 'asdf';

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute) {
    this.setEmptyGames();
  }

  setEmptyGames() {
    this.emptyGames = (new Array(5)).fill({
      name: 'Loading...',
      thumbnail: EMPTY_IMAGE_NAME_PATH,
      rating: 5
    });
  }

  update(newValue: string) {
    this.a = newValue;
  }

  getGames(categoryName: string) {
    this.gamesService.getGamesFromCategory(categoryName)
      .subscribe(
        (games) => {
          this.games = [];
          this.setGames(games);
        }
      );
  }

  private setGames(games: Game[]) {
    const gamesCopy = [...games];
    const game = gamesCopy.shift();
    this.games.push(game);
    if (!!gamesCopy.length) {
      setTimeout(() => this.setGames(gamesCopy), ANIMATION_TIMEOUT);
    }
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        param => this.getGames(param.get('name'))
      );
  }

}
