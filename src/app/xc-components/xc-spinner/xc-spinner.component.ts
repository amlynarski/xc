import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-xc-spinner',
  templateUrl: './xc-spinner.component.html',
  styleUrls: ['./xc-spinner.component.sass']
})
export class XcSpinnerComponent implements OnInit {
  @Input() show: boolean;
  @Input() fullPage: boolean;

  constructor() { }

  ngOnInit() {
  }

}
