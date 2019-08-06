import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Nl2BrPipeModule} from 'nl2br-pipe';

import { Title, Meta }     from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {


	postdetail:any;
	urld = 'http://192.168.1.40/slim/public/blog';

  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
  	this.getBlog();
  }

  public setTitle( newTitle: string) {
	    this.titleService.setTitle( newTitle );
	}

  	getBlog(): void{
  		const id = +this.route.snapshot.paramMap.get('id');
		const url = `${this.urld}/${id}`;
		console.log(url);
	    this.http.get(url).subscribe(res => {this.postdetail = res; this.setTitle(this.postdetail.blog_title); });
	}

	goBack(): void {
		this.location.back();
	}

}
