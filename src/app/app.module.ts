import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { TreemapComponent } from './treemap/treemap.component';
import { BarchartComponent } from './barchart/barchart.component';
import * as treemap from 'highcharts/modules/treemap.src';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    TreemapComponent,
    BarchartComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ treemap ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
