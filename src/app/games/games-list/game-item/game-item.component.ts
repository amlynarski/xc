import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../../shared/game.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
    ])
  ]
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
