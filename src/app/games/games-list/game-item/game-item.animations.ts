import { animate, state, style, transition, trigger } from '@angular/animations';

export const animations = [
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