import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-xc-input-field',
  templateUrl: './xc-input-field.component.html',
  styleUrls: ['./xc-input-field.component.sass']
})
export class XcInputFieldComponent implements OnInit {
  @Input() value: string;
  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Output() valueChange = new EventEmitter<string>();
  elementId: string;

  constructor() {
    if (!this.id) {
      this.elementId = Math.random().toString(36).substring(7);
    } else {
      this.elementId = this.id;
    }
  }

  update(currentValue: string) {
    this.valueChange.emit(currentValue);
  }

  ngOnInit() {}

}
