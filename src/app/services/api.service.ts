
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/weather/weather';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  url: string = 'https://localhost:7125';
  getData() {
    return this.http.get<Weather>(this.url + "/api/WeatherForecast/Get3Day");
  }
}

