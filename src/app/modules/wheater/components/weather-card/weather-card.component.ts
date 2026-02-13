import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../../../models/interfaces/WeatherData';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  standalone: false,
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  @Input() weatherDataInput!: WeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
