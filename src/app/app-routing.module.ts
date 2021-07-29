import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { GfsReunionComponent } from 'src/app/pages/gfs-reunion/gfs-reunion.component';
import { SubmitClaimComponent } from 'src/app/pages/submit-claim/submit-claim.component';

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
