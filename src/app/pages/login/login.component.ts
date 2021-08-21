import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { Router } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users = [];
  error = null;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): boolean {
    axios.post('http://localhost:1337/auth/local', {
      identifier: email,
      password,
    })
    .then(response => {
      this.cookieService.createCookie('__jwtBearer', response.data.jwt, 30);

      this.router.navigate(['user-profile']);
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
      return false;
    });

    return true;
  }
}
