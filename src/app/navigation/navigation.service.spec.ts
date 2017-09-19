import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationService } from './navigation.service';


describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [NavigationService]
    });
  });

  it('should return proper icon class', inject([NavigationService], (service: NavigationService) => {
    const iconName = 'someIcon.svg';
    const iconWihoutSvg = 'someIcon';
    const iconPrefix = 'gl-icon-';
    const iconClass = service.getElementIconClass(iconName);
    expect(iconClass).toBe(iconPrefix + iconWihoutSvg);
  }));
});
