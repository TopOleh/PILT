import { FilterPipe } from './../../core/pipes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FoodRoutingModule } from './food-routing.module';

import { MaterialModule } from 'src/app/core/modules';

import { FoodComponent,
  CaloriesCardComponent,
  CaloriesDashboardComponent,
  FoodFormComponent,
  UserFoodTableComponent
  } from './';

@NgModule({
  declarations: [
    FilterPipe,
    FoodComponent,
    CaloriesCardComponent,
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
