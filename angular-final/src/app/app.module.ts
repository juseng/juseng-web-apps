import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HourlyComponent } from './component/hourly/hourly.component';
import { DataService } from './services/data.service';

const appRoutes : Routes = [
  {path:'hourly', component:HourlyComponent}, // home page
];

@NgModule({
  declarations: [
    AppComponent,
    HourlyComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot(appRoutes),
	HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
