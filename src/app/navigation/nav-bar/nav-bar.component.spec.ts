import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { NavigationService } from '../navigation.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

const TEST_MENU_ELEMENTS = {
  main: [
    1,
    2
  ],
  menu: [
    {
      id: 1,
      name: 'kasiino 1',
      title: 'Mobiilne kasiino 1',
      icon: 'mobilecasino1_icon.svg',
      sub: []
    },
    {
      id: 2,
      name: 'kasiino 2',
      title: 'Mobiilne kasiino 2',
      icon: 'mobilecasino2_icon.svg',
      sub: []
    },
    {
      id: 3,
      name: 'kasiino 3',
      title: 'Mobiilne kasiino 2',
      icon: 'mobilecasino3_icon.svg',
      sub: []
    },
    {
      id: 4,
      name: 'kasiino 4',
      title: 'Mobiilne kasiino 4',
      icon: 'mobilecasino4_icon.svg',
      sub: []
    }
  ]
};

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    const navigationServiceMock = {
      getNavigationElements: function() {
        return Observable.of(TEST_MENU_ELEMENTS);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      providers: [ { provide: NavigationService, useValue: navigationServiceMock }]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display only main navigation elements', () => {
    fixture.detectChanges();
    expect(component.menuItems.length).toEqual(2);
  });
});
