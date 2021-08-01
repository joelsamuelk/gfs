import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurants = [];
  error = null;

  constructor() { }

  ngOnInit(): void {
    // this.getShipments().catch((error) => {
    //   this.error = error;
    // });
  }

  // async getShipments(): Promise<void> {
  //   try {
  //     const response = await axios.get('http://localhost:1337/shipments');
  //     this.restaurants = response.data;
  //     console.log(this.restaurants);
  //   } catch (error) {
  //     this.error = error;
  //   }
  // }

  onShowMore(): void {
  }
}
