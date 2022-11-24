import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ep = 'https://www.reddit.com/r/dota2.json?sort=hot';
  epm = 'https://www.reddit.com/r/memes.json?sort=hot';
  epmm = 'https://www.reddit.com/r/dankmemes.json?sort=hot';
  epmmm = 'https://www.reddit.com/r/meme.json?sort=hot';
  epmmmm = 'https://www.reddit.com/r/Animemes.json?sort=hot';

  constructor(private http: HttpClient) { }

  getDota() {
    return this.http.get(`${this.ep}`);
  }

  getMemes() {
    return this.http.get(`${this.epm}`);
  }

  getMemes2() {
    return this.http.get(`${this.epmm}`);
  }

  getMemes3() {
    return this.http.get(`${this.epmmm}`);
  }

  getMemes4() {
    return this.http.get(`${this.epmmmm}`);
  }

}
