import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { FoodModule } from './food/food.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    HomeModule,
    FoodModule
  ],
  exports: [ ]
})
export class ModulesModule { }
