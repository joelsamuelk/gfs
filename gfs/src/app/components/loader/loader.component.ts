import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (document?.readyState) {
      setTimeout(() => {
        document.body.classList.add('loaded');
        (document.querySelector('#loader-wrapper') as HTMLElement).style.visibility = 'hidden';
      }, 3000);
    }
  }

}
