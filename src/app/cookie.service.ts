import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';

import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private router: Router) { }

  createCookie(name: string, value: string, days: number): void {
      let expires = '';

      if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + value + expires + '; path=/';
  }

  async verifyUser(): Promise<User | undefined> {
    const jwtBearer = this.readCookie('__jwtBearer');

    if (!jwtBearer){
      await this.router.navigate(['login']);
      return undefined;
    }

    try{
      const response = await axios.get('http://localhost:1337/users/me', {
        headers: {
          Authorization: `Bearer ${jwtBearer}`
        }
      });

      if (!response){
        await this.router.navigate(['login']);
        return undefined;
      }

      return response.data as User;
    }
    catch (e){
      await this.router.navigate(['login']);
      return undefined;
    }
  }

  readCookie(name: string): string {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return '';
  }

  async logOut(): Promise<void> {
    await this.eraseCookie('__jwtBearer').then(resp => {
      this.router.navigate(['']);
    });
  }

  private async eraseCookie(name: string): Promise<void> {
      this.createCookie(name, '', -1);
  }
}
