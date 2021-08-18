import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GfsReunionComponent } from 'src/app/pages/gfs-reunion/gfs-reunion.component';
import { SubmitClaimComponent } from 'src/app/pages/submit-claim/submit-claim.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'submit-claim',
    component: SubmitClaimComponent,
  },
  {
    path: 'gfs-reunion',
    component: GfsReunionComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '*',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
