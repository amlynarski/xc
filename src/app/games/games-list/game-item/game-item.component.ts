import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../../shared/game.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

const SHOW_PLAY_TIME = 500;

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.sass'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: '1'})),
      transition(':enter', [
        style({opacity: '0'}),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Input() isEmpty: boolean;
  showTimeout: any;
  showPlayButton: boolean;

  constructor() { }

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

  ngOnInit() {
  }

}
