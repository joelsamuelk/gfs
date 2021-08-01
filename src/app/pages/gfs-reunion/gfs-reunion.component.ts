import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import axios from 'axios';

@Component({
  selector: 'app-gfs-reunion',
  templateUrl: './gfs-reunion.component.html',
  styleUrls: ['./gfs-reunion.component.scss']
})
export class GfsReunionComponent implements OnInit {

  _jwtBearer: string | null;

  constructor(private cookieService: CookieService) {
    this._jwtBearer = null;
   }

  async ngOnInit(): Promise<any> {
    
    if(! await this.cookieService.verifyUser()){
      console.log("REDIRECT ME!!!!!");
    }
    
  }

}
