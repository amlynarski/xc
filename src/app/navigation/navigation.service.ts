import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './shared/menu-item.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

const ICON_PREFIX = 'gl-icon-';
const THUMB_PATH = '/assets/gl_task_images/';

@Injectable()
export class NavigationService {
  private isOpen: boolean;
  private isOpenStream: Subject<boolean>;
  private selectedElement: MenuItem | null;
  private selectedElementStream: Subject<MenuItem | null>;

  constructor(private http: Http, private router: Router) {
    this.isOpenStream = new Subject();
    this.selectedElementStream = new Subject();
  }

  getNavigationElements() {
    return this.http
      .get('assets/api/menu.json')
      .map((response: Response) => {
        return <any[]>response.json();
      })
      .catch(this.handleError);
  }

  getElementIconClass(iconName: string): string {
    return ICON_PREFIX.concat(iconName.replace('.svg', ''));
  }

  selectElement(element: MenuItem) {
    if (!this.isOpen) {
      this.open();
    }
    this.selectedElement = element;
    this.selectedElementStream.next(this.selectedElement);
  }

  getSelectedElement(): MenuItem | null {
    return this.selectedElement;
  }

  selectedElementChange(): Subject<MenuItem | null> {
    return this.selectedElementStream;
  }

  getThumbFullPath(thumb: string): string {
    return THUMB_PATH.concat(thumb);
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
    this.selectedElement = null;
    this.selectedElementStream.next(this.selectedElement);
  }

  navigateTo(href: string) {
    this.router.navigate([href]);
    this.close();
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
