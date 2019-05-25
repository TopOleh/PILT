import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FoodRoutingModule } from './food-routing.module';

import { MaterialModule } from 'src/app/core/modules';

import { FoodComponent,
  CaloriesDashboardComponent,
  FoodFormComponent,
  UserFoodTableComponent
  } from './';

@NgModule({
  declarations: [
    FoodComponent,
    CaloriesDashboardComponent,
    FoodFormComponent,
    UserFoodTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
