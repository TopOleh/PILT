import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';

import { FirebaseModule } from './firebase/firebase.module';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/shared/routing/app-routing.module';

import { UserComponent } from './user/user/user.component';
import { CaloriesCardComponent } from './components/calories-card/calories-card.component';
import { CaloriesDashboardComponent } from './components/calories-dashboard/calories-dashboard.component';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { UserFoodTableComponent } from './components/user-food-table/user-food-table.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegistrationComponent,
    HomeComponent,
    UserComponent,
    CaloriesCardComponent,
    CaloriesDashboardComponent,
    FoodFormComponent,
    UserFoodTableComponent
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [ AuthComponent, HomeComponent ]
})
export class ModulesModule { }
