import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service constructed')
  }

  getWeather(){
    return this.http.get('http://api.wunderground.com/api/b4d716b0574d7d98/hourly/q/Ontario/Kingston.json').map(res => res.json())
  }
}
