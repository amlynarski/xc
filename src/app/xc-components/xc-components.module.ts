import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { XcInputFieldComponent } from './xc-input-field/xc-input-field.component';
import { XcSearchFieldComponent } from './xc-search-field/xc-search-field.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    XcInputFieldComponent,
    XcSearchFieldComponent
  ],
  exports: [
    XcInputFieldComponent,
    XcSearchFieldComponent
  ],
  providers: []
})
export class XcComponentsModule {}
