import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map_image: String;
  constructor() { 
    this.map_image = 'https://i.pinimg.com/originals/e0/bf/e5/e0bfe54efe9a2f3cd5114c356d91d4ec.jpg';
  }

  ngOnInit() {
  }

}
