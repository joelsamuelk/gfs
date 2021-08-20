import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'src/app/cookie.service';

import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  register(username: string, email: string, password: string): boolean {
    axios.post('http://localhost:1337/auth/local/register', {
    username,
    email,
    password,
  })
  .then(response => {
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
    return false;
  });

    return true;
  }
}
