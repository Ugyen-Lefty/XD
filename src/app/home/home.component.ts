import { Component, OnInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    new Swiper('.swiper', {
      effect: "cube",
      cubeEffect: {
        shadow: false,
      },
      // Optional parameters
      direction: 'horizontal',

      // If we need pagination
      pagination: {
        el: false,
      },

      // Navigation arrows
      navigation: false,

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
