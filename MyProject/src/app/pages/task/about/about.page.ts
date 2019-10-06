import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  about_image: String;
  constructor() { 
    this.about_image = 'http://www.adhunikengg.co.in/images/About-us.jpg';
  }
  ngOnInit() {
  }

}
