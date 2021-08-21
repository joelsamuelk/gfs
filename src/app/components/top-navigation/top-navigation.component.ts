import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  user: User | undefined;

  classApplied = false;
  

  constructor(private cookieService: CookieService, private _router: Router) {
    this.user = undefined;
   }

  async ngOnInit(): Promise<any> {

    try{
      this.user = await this.cookieService.verifyUserNoRedirect();
    }
    catch(e){
      console.error(e);
    }
  }

  logout():void {
    this.cookieService.logOut();
  }

  onMenuClick(): void {
    this.classApplied = !this.classApplied;
  }
}
