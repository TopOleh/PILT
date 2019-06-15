import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards';

import { FoodComponent,
  AllFoodComponent,
  FoodFormComponent,
  UserFoodTableComponent
} from './';

const routes: Routes = [
  { path: 'food', component: FoodComponent, canActivate: [AuthGuard], children: [
    {path: 'new-card', component: FoodFormComponent },
    {path: 'all-food', component: AllFoodComponent },
    {path: 'food-table', component: UserFoodTableComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
