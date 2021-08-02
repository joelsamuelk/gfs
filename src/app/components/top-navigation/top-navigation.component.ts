import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  classApplied = false;
  user: User | undefined;

  constructor(private cookieService: CookieService, private _router: Router) {
   }

  async ngOnInit(): Promise<any> {

    try{
      this.user = await this.cookieService.verifyUser();
      console.log(this.user);
    }
    catch(e){
      console.error(e);
    }
  }

  logout():void {
    console.log("in here");
    this.cookieService.logOut();
  }

  onMenuClick(): void {
    this.classApplied = !this.classApplied;
  }
}
