import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from '../games.service';
import { Game } from '../shared/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  game: Game;
  showSpinner: boolean;
  gameNotFound: boolean;

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (param) => {
          this.showSpinner = true;
          this.getGame(param.get('id'));
        }
      );
  }

  private getGame(id: string) {
    this.gamesService.getGame(id)
      .finally(() => this.showSpinner = false)
      .subscribe(
        game => this.setGame(game),
        error => this.gameNotFound = true
      );
  }

  private setGame(game) {
    this.gameNotFound = false;
    this.game = game;
  }

}
