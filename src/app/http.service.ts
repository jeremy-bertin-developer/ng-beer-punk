import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeers(): Observable<any> {
    return this.http.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`);
  }
}
