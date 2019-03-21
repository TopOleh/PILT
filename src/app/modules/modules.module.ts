import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';

import { FirebaseModule } from './firebase/firebase.module';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user/user.component';

@NgModule({
  declarations: [LoginComponent, AuthComponent, RegistrationComponent, HomeComponent, UserComponent],
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [ AuthComponent, HomeComponent ]
})
export class ModulesModule { }
