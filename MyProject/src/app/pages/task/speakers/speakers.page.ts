import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  speakers_image: String;

  constructor() { 
    this.speakers_image = 'http://d287ku8w5owj51.cloudfront.net/images/products/hero/others/hero-creative-t30-wireless.jpg?width=800&height=800';
  }

  ngOnInit() {
  }

}
