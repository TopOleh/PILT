import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarComponent } from './components';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SnackBarComponent
  ]
})
export class SharedModule { }
