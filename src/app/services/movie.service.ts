import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieSerivce {
  term$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  findByTitle(title: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/multi?api_key=266e96d82000d37c7b97a3a18202dadd&language=es&query=${title}`
    );
  }

  getAllMovie(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=266e96d82000d37c7b97a3a18202dadd&language=es`
    );
  }

  getTerm(): BehaviorSubject<string> {
    return this.term$;
  }
}
