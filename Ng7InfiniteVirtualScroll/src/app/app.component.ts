import {  Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng7InfiniteVirtualScroll';
  dummydata;
  gusers:any = [];
  nurl = "http://192.168.1.40/testing/wp-json/wp/v2/posts";

  constructor(private http: HttpClient) { }
  ngOnInit() {
    	this.getData();
	}

	getData(): void {
		this.http.get(this.nurl).subscribe((res) => {
			this.gusers = res;
			console.log(this.gusers);
		});  
	}
}