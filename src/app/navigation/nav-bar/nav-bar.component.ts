import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {}

  toggleNavMenu() {
    this.navigationService.toggleNav();
  }

}
