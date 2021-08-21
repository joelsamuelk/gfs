import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {  
  user: User | undefined;

  constructor(private cookieService: CookieService, private _router: Router) { }

  async ngOnInit(): Promise<void> {
    try{
      this.user = await this.cookieService.verifyUserNoRedirect();
      if(this.user != undefined)
      {
        this._router.navigate(['user-profile']);
      }
    }
    catch(e){
      console.error(e);
    }
  }

  register(username: string, email: string, password: string): boolean {
    axios.post('http://localhost:1337/auth/local/register', {
    username: username,
    email: email,
    password: password,
  })
  .then(response => {
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    this._router.navigate(['login']);
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
    return false;
  });

    return true;
  }

}
