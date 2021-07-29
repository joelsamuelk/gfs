import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  classApplied = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(): void {
    this.classApplied = !this.classApplied;
  }
}
