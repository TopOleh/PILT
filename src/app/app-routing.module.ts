import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';

import { FoodComponent } from 'src/app/modules/user/user/food.component';
import { CaloriesDashboardComponent } from 'src/app/modules/components/calories-dashboard/calories-dashboard.component';
import { FoodFormComponent } from 'src/app/modules/components/food-form/food-form.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { UserFoodTableComponent } from 'src/app/modules/components/user-food-table/user-food-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'food', component: FoodComponent, canActivate: [AuthGuard], children:[
    {path: 'new-card', component: FoodFormComponent },
    {path: 'food-search', component: CaloriesDashboardComponent },
    {path: 'food-table', component: UserFoodTableComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
