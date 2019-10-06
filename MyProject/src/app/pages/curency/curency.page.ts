import { Component, OnInit } from '@angular/core';
import { HttpClient }   from '@angular/common/http';

@Component({
  selector: 'app-curency',
  templateUrl: './curency.page.html',
  styleUrls: ['./curency.page.scss'],
})
export class CurencyPage implements OnInit {
  fileData: any;
  type:  String = 'buy';

  segmentChanged(ev: any) {
    if(ev['detail']['value'] === 'sale') {
      this.type = 'sale';
    } else {
      this.type = 'buy';
    }
  }

 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe( (reslist) => {
      console.log(this.fileData = reslist);
    })
  }

}
