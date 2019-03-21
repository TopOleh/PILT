import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from 'src/app/modules/user/user/user.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AuthComponent } from 'src/app/modules/auth/auth.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
