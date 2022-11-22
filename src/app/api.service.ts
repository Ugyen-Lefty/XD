import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ep = 'https://www.reddit.com/r/dota2.json?sort=hot';

  constructor(private http: HttpClient) { }

  getDota() {
    return this.http.get(`${this.ep}`);
  }

}
