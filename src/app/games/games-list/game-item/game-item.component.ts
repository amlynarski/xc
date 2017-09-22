import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../shared/game.model';
import { animations } from './game-item.animations';

const SHOW_PLAY_TIME = 500;

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.sass'],
  animations: animations
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Input() isEmpty: boolean;
  showTimeout: any;
  showPlayButton: boolean;

  constructor(private router: Router) { }

  onMouseEnter() {
    this.showTimeout = setTimeout(
      () => {
        this.showPlay();
      },
      SHOW_PLAY_TIME
    );
  }

  onMouseLeave() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    this.hidePlay();
  }

  showPlay() {
    this.showPlayButton = true;
  }

  hidePlay() {
    this.showPlayButton = false;
  }

  playGame() {
    this.router.navigate([`games/${this.game.id}`]);
  }

  ngOnInit() {
  }

}
