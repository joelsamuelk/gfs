import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor() {}

  ngOnInit(): void {
  }
}
