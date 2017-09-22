import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-xc-search-field',
  templateUrl: './xc-search-field.component.html',
  styleUrls: ['./xc-search-field.component.sass']
})
export class XcSearchFieldComponent implements OnInit {
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() id: string;
  @Input() label: string;
  @Output() valueChange = new EventEmitter<string>();
  placeholder: string;

  constructor() { }

  ngOnInit() {
    this.placeholder = 'Search...';
  }

  update(currentValue: string) {
    this.valueChange.emit(currentValue);
  }

}
