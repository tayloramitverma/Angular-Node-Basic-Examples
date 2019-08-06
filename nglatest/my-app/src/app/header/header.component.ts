import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  currentUser = localStorage.getItem("currentUser");

  ngOnInit() {

  }

  	logout(){
		localStorage.removeItem("currentUser");
		let currentUser = localStorage.getItem("currentUser");
		if(!currentUser) {
      		this.router.navigate(['login']);
      		return;
    	}
	}

}
