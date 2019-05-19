import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';

import { FoodComponent,
  CaloriesDashboardComponent,
  FoodFormComponent,
  UserFoodTableComponent
} from './';

const routes: Routes = [
  { path: 'food', component: FoodComponent, canActivate: [AuthGuard], children: [
    {path: 'new-card', component: FoodFormComponent },
    {path: 'food-search', component: CaloriesDashboardComponent },
    {path: 'food-table', component: UserFoodTableComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
