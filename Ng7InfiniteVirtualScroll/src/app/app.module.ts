import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';
 
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    PlatformModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }