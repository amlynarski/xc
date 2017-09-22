import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationService } from './navigation.service';


describe('NavigationService', () => {
  let service: NavigationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [NavigationService]
    });
  });

  it('should open navigation and send value with stream', fakeAsync( () => {
    service = TestBed.get(NavigationService);
    let isOpen  = null;
    service.isNavOpen()
      .subscribe(
        value => isOpen = value
      );
    service.open();
    tick();
    expect(isOpen).toBe(true);
  }));

  it('should toggle navigation and send value with stream', fakeAsync( () => {
    service = TestBed.get(NavigationService);
    let isOpen  = null;
    service.isNavOpen()
      .subscribe(
        value => isOpen = value
      );
    service.open();
    tick();
    service.toggleNav();
    tick();
    expect(isOpen).toBe(false);
  }));

});
