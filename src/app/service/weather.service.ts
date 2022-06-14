import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(city: string): Observable<Root>{

    return this.httpClient.get<Root>(environment.weatherAPIBaseURL, {
      headers: new HttpHeaders()
        .set(environment.XRapidHostHeaderName, environment.XRapidHostHeaderValue)
        .set(environment.XRapidKeyHeaderName, environment.XRapidKeyHeaderValue),

      params: new HttpParams()
        .set('q', city).set('units', 'metric').set('mode', 'json'),
    });
  }
}
