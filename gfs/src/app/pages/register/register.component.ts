import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User | undefined;

  constructor(private cookieService: CookieService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    try{
      this.user = await this.cookieService.verifyUserNoRedirect();
      if (this.user !== undefined)
      {
        this.router.navigate(['user-profile']);
      }
    }
    catch (e){
      console.error(e);
    }
  }

  register(username: string, email: string, password: string): boolean {
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

    axios.post(environment.strapiUrl + '/auth/local/register', {
    username,
    email,
    password,
  })
  .then(response => {
    Toast.fire({
      icon: 'success',
      title: 'Registration successful'
    });

    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    this.router.navigate(['login']);
  })
  .catch(error => {
    Toast.fire({
      icon: 'error',
      title: 'Registration failed'
    });

    console.log('An error occurred:', error.response);
    return false;
  });

    return true;
  }
}
