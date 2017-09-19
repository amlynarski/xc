import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  isNavOpen: boolean;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.isNavOpen()
      .subscribe(
        isOpen => this.isNavOpen = isOpen
      );
  }

}
