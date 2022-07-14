import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather/weather';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  data: any;
  error: string = 'error';
  weatherForDays: Weather[] = [];
  headers = ["date", "avgtemp_c", "avgvis_km"];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showData();
  }
  showData() {
    this.apiService.getData()
      .subscribe({
        next: (data: any) => {
          this.data = { ...data };
          data["forecast"]["forecastday"].forEach((e: any) => {
            let w: Weather = { date: e["date"], avgtemp_c: e["day"]["avgtemp_c"], avgvis_km: e["day"]["avgvis_km"] };
            this.weatherForDays.push(w);
          });
          console.log(this.weatherForDays);
        }, // success path
        error: error => this.error = error, // error path
      });
  }
}
