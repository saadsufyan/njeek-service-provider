import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { RegisterComponent } from './pages/register/register.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'category',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  }, {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },
]},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: 'category'
  }
]
