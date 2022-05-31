import { Component, OnInit } from '@angular/core';

import { MovieSerivce } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieList!: any[];
  interact = { loading: false, error: false };
  constructor(private movieSvc: MovieSerivce) {}

  ngOnInit(): void {
    this.movieSvc
      .getAllMovie()
      .subscribe(({ results }: any) => (this.movieList = results));
  }

  onChangeText(value: string) {
    if (value) {
      this.movieSvc
        .findByTitle(value)
        .subscribe(({ results }: any) => (this.movieList = results));
    }
  }
}
