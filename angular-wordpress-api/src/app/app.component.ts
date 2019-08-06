import { Component, OnInit } from '@angular/core';

import { WordpressService } from './wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

	pages: any[];

  constructor(private wp: WordpressService) {}

  ngOnInit() {
    this.getPage();
  }

  getPage(): void {
    this.wp.getPosts().subscribe(res => { this.pages = res; console.log(res); });
    
  }

   
  
}