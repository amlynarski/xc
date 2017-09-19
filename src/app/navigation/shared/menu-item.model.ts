import { SubMenuItem } from './sub-menu-item.model';

export class MenuItem {
  id: number;
  name: string;
  title: string;
  icon: string;
  sub: SubMenuItem[];
}
