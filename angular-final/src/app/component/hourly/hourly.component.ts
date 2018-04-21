import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  hour : string;
  condition : string;
  temperature : string;
  
  constructor(private dataService:DataService) {
    console.log("In constructor");
  }

	ngOnInit() {
		console.log("In ngOnInit");		
		this.dataService.getWeather().subscribe((data)=> {
			this.hour = data.hourly_forecast[0].FCTTIME.hour;
			this.condition = data.hourly_forecast[0].condition;
			this.temperature = data.hourly_forecast[0].temp.metric;
		});
	}	

}
