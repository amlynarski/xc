import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const animations = [
  trigger('menuState', [
    state('active', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ])
  ])
];

export default animations;
