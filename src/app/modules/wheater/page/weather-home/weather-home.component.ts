import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../../../models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-home',
  standalone: false,
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.scss',
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Recife';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData);
      },
      error: (error) => console.log(error),
    });
  }
}
