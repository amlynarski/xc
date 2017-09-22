import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { XcInputFieldComponent } from './xc-input-field/xc-input-field.component';
import { XcSearchFieldComponent } from './xc-search-field/xc-search-field.component';
import { XcSpinnerComponent } from './xc-spinner/xc-spinner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    XcInputFieldComponent,
    XcSearchFieldComponent,
    XcSpinnerComponent
  ],
  exports: [
    XcInputFieldComponent,
    XcSearchFieldComponent,
    XcSpinnerComponent
  ],
  providers: []
})
export class XcComponentsModule {}
