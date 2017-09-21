import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GamesService } from '../games.service';
import { Game } from '../shared/game.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.sass']
})
export class GamesListComponent implements OnInit {
  games$: Observable<Game[]>;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.games$ = this.route.paramMap
        .switchMap((params: ParamMap) => this.gamesService.getGamesFromCategory(params.get('name')) );
  }

}
