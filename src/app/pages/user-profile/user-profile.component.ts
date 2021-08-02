import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  _jwtBearer: string | null;
  user: User | undefined;

  constructor(private cookieService: CookieService, private _router: Router) {
    this._jwtBearer = null;
   }

  async ngOnInit(): Promise<any> {
    try{
      this.user = await this.cookieService.verifyUser();
      
    }
    catch(e){
      console.error(e);
    }
    
  }

}
