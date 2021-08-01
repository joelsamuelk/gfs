import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  _jwtBearer: string | null;

  constructor(private cookieService: CookieService, private _router: Router) {
    this._jwtBearer = null;
   }

  async ngOnInit(): Promise<any> {
    
    if(! await this.cookieService.verifyUser()){
      this._router.navigate(['login']);
    }
    
  }

}
