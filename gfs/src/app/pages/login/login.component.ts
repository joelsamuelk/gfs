import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import axios from 'axios';

import { CookieService } from 'src/app/cookie.service';
import { environment } from 'src/environments/environment';

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
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    axios.post(environment.strapiUrl + '/auth/local', {
      identifier: email,
      password,
    })
    .then(response => {
      this.cookieService.createCookie('__jwtBearer', response.data.jwt, 30);
      this.router.navigate(['user-profile']);
    })
    .catch(error => {
      Toast.fire({
        icon: 'error',
        title: 'Email or password incorrect'
      });

      console.log('An error occurred:', error.response);
      return false;
    });

    return true;
  }
}
