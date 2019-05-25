import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components';
import { ShowRoutesDirective } from './components/header/directives/show-routes.directive';

@NgModule({
  declarations: [ PageNotFoundComponent, ShowRoutesDirective],
  imports: [
    CommonModule
  ],
   exports: [ShowRoutesDirective]
})
export class LayoutModule { }
