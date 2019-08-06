import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }      from './hero-detail/hero-detail.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'blog/:id', component: BlogDetailComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
 	{ path: 'heroes', component: HeroesComponent },
 	{ path: 'blogs', component: BlogListComponent },
 	{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
