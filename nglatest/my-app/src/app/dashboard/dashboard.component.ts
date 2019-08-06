import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../user';
import { Title, Meta }     from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	@Input() user: User;

	gusers:any;
	postdetail:any;
	finalres:any;
	userId = localStorage.getItem("currentUser");
	//localStorage.removeItem("currentUser");
	nurl ='http://192.168.1.40/API-test/av.php';
	purl ='http://192.168.1.40/API-test/avpost.php';

    constructor(private http: HttpClient, private titleService: Title, private meta: Meta) {
    	meta.addTag({name: 'description', content: 'Title and Meta tags examples'});
    }

	public setTitle( newTitle: string) {
	    this.titleService.setTitle( newTitle );
	}

	ngOnInit() {
    	this.getData();
    	this.setTitle('Dashboard');
	}

	getData(): void {
		this.http.get(this.nurl).subscribe(res => this.gusers = res);  
	}

	getUser(id: number): void {
	    const url = `${this.nurl}?id=${id}`;
	    this.http.get<User>(url).subscribe(res => this.postdetail = res); 
	}

	updateUser(): void {
		this.http.put(this.purl, this.postdetail, httpOptions).subscribe(res => {
			this.finalres = res;
		   console.log(res);
		}); 
	}


}
