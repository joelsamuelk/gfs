import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  createCookie(name: string, value: string, days: number) {  
      var expires = "";  
      if (days) {  
          var date = new Date();  
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  
          expires = "; expires=" + date.toUTCString();  
      }  
      document.cookie = name + "=" + value + expires + "; path=/";  
  }
  
  async verifyUser(): Promise<boolean> {
    const jwtBearer = this.readCookie('__jwtBearer');

    if(!jwtBearer){
      return false;
    }
    
    try{
      const response = await axios.get("http://localhost:1337/users/me", {
        headers: {
          Authorization: `Bearer ${jwtBearer}`
        }
      });

      if(!response){
        return false;
      }

      return true;
    }
    catch(e){
      return false;
    }
    


    /* .then(response => {
      return true;
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
      return false;
    }); */
  }

  readCookie(name: string) {  
      var nameEQ = name + "=";  
      var ca = document.cookie.split(';');  
      for (var i = 0; i < ca.length; i++) {  
          var c = ca[i];  
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);  
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);  
      }  
      return null;  
  }  

  eraseCookie(name: string) {  
      this.createCookie(name, "", -1);  
  }
}
