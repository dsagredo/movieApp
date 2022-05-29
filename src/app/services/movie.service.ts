import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieSerivce {
  constructor(private http: HttpClient) {}

  getAllMovie() {
    const headers = new HttpHeaders({
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
      'X-RapidAPI-Key': '86d9420e70msh6639065dcec2d80p1cd443jsnc7dcfa07a622',
    });
    return this.http.get(
      'https://online-movie-database.p.rapidapi.com/actors/get-all-news?nconst=nm0001667',
      { headers }
    );
  }
}
