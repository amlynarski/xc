import { Game } from './game.model';

class Embedded {
  games: Game[];
}

export class Category {
  name: string;
  order: number;
  slug: string;
  _embedded: Embedded;
}
