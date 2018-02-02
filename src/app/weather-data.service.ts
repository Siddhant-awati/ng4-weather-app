import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherDataService {
constructor( private http: HttpClient) { }

  getData(city, days): Observable<Object[]> {
    console.log(city, days);
    let url = 'http://api.apixu.com/v1/forecast.json?key=0944816a971f454fa46141443180102&q='+city+'&days='+days;
    
    return this.http.get<Object[]>(url);
  }
}
