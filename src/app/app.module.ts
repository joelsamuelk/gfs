import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GfsReunionComponent } from './pages/gfs-reunion/gfs-reunion.component';
import { HeaderSliderComponent } from './components/header-slider/header-slider.component';
import { SubmitClaimComponent } from './pages/submit-claim/submit-claim.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FooterNavigationComponent,
    LoaderComponent,
    LoginComponent,
    HomeComponent,
    GfsReunionComponent,
    HeaderSliderComponent,
    SubmitClaimComponent,
    UserProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
