import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from 'src/app/modules/user/user/user.component';
import { CaloriesDashboardComponent } from 'src/app/modules/components/calories-dashboard/calories-dashboard.component';
import { FoodFormComponent } from 'src/app/modules/components/food-form/food-form.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AuthComponent } from 'src/app/modules/auth/auth.component';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { RegistrationComponent } from 'src/app/modules/auth/registration/registration.component';
import { UserFoodTableComponent } from 'src/app/modules/components/user-food-table/user-food-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], children:[
    {path: 'new-card', component: FoodFormComponent },
    {path: 'food-search', component: CaloriesDashboardComponent },
    {path: 'user-table', component: UserFoodTableComponent }
  ]},
  { path: 'home/auth',
   component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
