import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { WeatherHomeComponent } from './modules/wheater/page/weather-home/weather-home.component';


@NgModule({
  declarations: [AppComponent, WeatherHomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
