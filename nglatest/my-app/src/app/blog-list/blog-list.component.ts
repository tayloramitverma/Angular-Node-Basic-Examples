import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

	gusers:any;
	postdetail:any;
	finalres:any;

	nurl ='http://192.168.1.40/slim/public/blogs';
	urld = 'http://192.168.1.40/slim/public/blog';

    constructor(private http: HttpClient, private titleService: Title) { }

    public setTitle( newTitle: string) {
	    this.titleService.setTitle( newTitle );
	}

	ngOnInit() {
    	this.getData();
    	this.setTitle('Blog Listing');
	}

	getData(): void {
		this.http.get(this.nurl).subscribe(res => this.gusers = res);  
	}

	getBlog(id: number): void{

		const url = `${this.urld}/${id}`;
	    this.http.get(url).subscribe(res => this.postdetail = res); 

	}

}

