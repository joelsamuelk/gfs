import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  user: User | undefined;

  classApplied = false;

  constructor(private cookieService: CookieService) {
    this.user = undefined;
   }

  ngOnInit(): void {
    this.login().then(r => {});
  }

  async login(): Promise<void> {

    try{
      this.user = await this.cookieService.verifyUserNoRedirect();
    }
    catch (e) {
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
