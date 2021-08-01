import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/users';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  classApplied = false;
  user: User | undefined;

  constructor(private cookieService: CookieService) {
   }

  async ngOnInit(): Promise<any> {
    if(! await this.cookieService.verifyUser()){
      console.log("Show login button");

      return;
    }

    //const userData = JSON.parse(this.cookieService.readCookie('__authUser')) || '{}';
    this.user = JSON.parse('');
  }

  onMenuClick(): void {
    this.classApplied = !this.classApplied;
  }
}
