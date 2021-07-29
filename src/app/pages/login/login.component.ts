import { Component, OnInit } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users = [];
  error = null;

  constructor() { }

  ngOnInit(): void {
  }

  login(email: string, password: string): boolean {
    alert(email + `` + password);
    // this.authService.login(email, password).subscribe((resp) => {
    //   console.log(resp);
    // });

    return true;
  }
}
