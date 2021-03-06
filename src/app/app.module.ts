import { MaterialModule } from './core/modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { ModulesModule } from './modules/modules.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { FirebaseModule } from './core/modules';
import { HeaderComponent, FooterComponent } from './layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    MaterialModule,
    ModulesModule,
    LayoutModule,
    CoreModule,
    // Must be the last
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( private router: Router) {
    // console.log('Routes :', JSON.stringify(router.config, undefined, 2));
  }
}
