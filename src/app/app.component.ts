import { Component, OnInit } from '@angular/core';
import { Root } from './models/weather.model';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  cityname: string | any;
  weatherData: Root | undefined;

  ngOnInit(): void {
    this.getCityName('Colombo');
  }

  onSubmit(){
    this.getCityName(this.cityname);
    this.cityname = '';
  }

  private getCityName(cityname: string): void{
    this.weatherService.getWeatherData(cityname).subscribe({
      next: (response) =>{
        this.weatherData = response;
        console.log(response);
      }
    })
  }

  title = 'WeatherApp';
}


