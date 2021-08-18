import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  @Input()  user: User | undefined;
  @Output() userChange = new EventEmitter<User>();

  @Input() userLoggedIn: boolean;
  @Output() userLoggedInChange = new EventEmitter<boolean>();

  classApplied = false;
  

  constructor(private cookieService: CookieService, private _router: Router) {
    this.user = undefined;
    this.userLoggedIn = false;
   }

  async ngOnInit(): Promise<any> {

    try{
      this.user = await this.cookieService.verifyUser();
      this.userChange.emit(this.user);

      this.userLoggedIn = true;
      this.userLoggedInChange.emit(this.userLoggedIn);
    }
    catch(e){
      console.error(e);
    }
  }

  logout():void {
    this.userLoggedIn = false;
    this.userLoggedInChange.emit(this.userLoggedIn);
    this.cookieService.logOut();
  }

  onMenuClick(): void {
    this.classApplied = !this.classApplied;
  }
}
