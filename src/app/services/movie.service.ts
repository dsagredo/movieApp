import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieSerivce {
  constructor(private http: HttpClient) {}

  findByTitle(title: string) {
    return this.http.get(
      `${environment.apiMovie}search/multi?api_key=266e96d82000d37c7b97a3a18202dadd&language=es&query=${title}`
    );
  }

  getAllMovie() {
    return this.http.get(
      `${environment.apiMovie}discover/movie?api_key=266e96d82000d37c7b97a3a18202dadd&language=es`
    );
  }

  getMovieId(id: number) {
    return this.http.get(
      `${environment.apiMovie}movie/${id}?api_key=266e96d82000d37c7b97a3a18202dadd&language=es`
    );
  }
}
