import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../../../models/interfaces/WeatherData';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  standalone: false,
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.scss',
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Recife';
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;
  clearIcon = faXmark;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  clearSearch(): void {
    this.initialCityName = '';
    // @ts-ignore
    this.weatherData = null;
  }

  getWeatherData(cityName: string): void {
    this.weatherService
      .getWeatherData(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response);
          console.log(this.weatherData);
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
