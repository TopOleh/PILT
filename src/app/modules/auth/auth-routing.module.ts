import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent, LoginComponent, RegistrationComponent } from '.';
import { LoginGuard } from 'src/app/core/guards/auth/login.guard';

const routes: Routes = [
  { path: 'auth',
    component: AuthComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
