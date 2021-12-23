import { Component, OnInit } from '@angular/core';

import axios from 'axios';

import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-gfs-reunion',
  templateUrl: './gfs-reunion.component.html',
  styleUrls: ['./gfs-reunion.component.scss']
})
export class GfsReunionComponent implements OnInit {

  jwtBearer: string | null;

  constructor(private cookieService: CookieService) {
    this.jwtBearer = null;
   }

  async ngOnInit(): Promise<any> {

    if (! await this.cookieService.verifyUser()){
      console.log('REDIRECT ME!!!!!');
    }

    this.isMobile();
  }

  isMobile(): boolean {
    if (window.screen.width < 768) {
      return true;
    }

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
