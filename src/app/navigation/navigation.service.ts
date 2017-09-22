import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  private isOpen: boolean;
  private isOpenStream: Subject<boolean>;

  constructor(private router: Router) {
    this.isOpenStream = new Subject();
  }

  isNavOpen(): Subject<boolean> {
    return this.isOpenStream;
  }

  toggleNav(): boolean {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
    return this.isOpen;
  }

  open(): void {
    this.isOpen = true;
    this.isOpenStream.next(this.isOpen);
  }

  close(): void {
    this.isOpen = false;
    this.isOpenStream.next(this.isOpen);
  }

  navigateTo(href: string) {
    this.router.navigate([href]);
    this.close();
  }
}
