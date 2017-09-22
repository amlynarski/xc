import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-xc-input-field',
  templateUrl: './xc-input-field.component.html',
  styleUrls: ['./xc-input-field.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => XcInputFieldComponent),
      multi: true
    }
  ]
})
export class XcInputFieldComponent implements ControlValueAccessor {
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;

  elementId: string;
  inputValue: string;

  constructor() {
    if (!this.id) {
      this.elementId = Math.random().toString(36).substring(7);
    } else {
      this.elementId = this.id;
    }
  }

  writeValue(value: string) {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  update(currentValue: string) {
    this.propagateChange(currentValue);
  }

}
