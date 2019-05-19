import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent, LoginComponent, RegistrationComponent } from './auth';
import { HomeComponent } from './home/home.component';

import { FirebaseModule } from '../core/modules/firebase/firebase.module';
import { MaterialModule } from '../core/modules/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { FoodComponent } from './food/food.component';
import { CaloriesCardComponent } from './food/components/calories-card/calories-card.component';
import { CaloriesDashboardComponent } from './food/components/calories-dashboard/calories-dashboard.component';
import { FoodFormComponent } from './food/components/food-form/food-form.component';
import { UserFoodTableComponent } from './food/components/user-food-table/user-food-table.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegistrationComponent,
    HomeComponent,
    FoodComponent,
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
