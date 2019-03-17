import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginComponent, AuthComponent, RegistrationComponent, HomeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [ AuthComponent, HomeComponent ]
})
export class ModulesModule { }
