import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { OsmViewComponent } from './osm-view/osm-view.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularOpenlayersModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, OsmViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
