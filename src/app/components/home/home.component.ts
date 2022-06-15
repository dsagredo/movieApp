import { Component, OnInit } from '@angular/core';
import { MovieSerivce } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieList!: any[];
  loading: boolean;
  message!: string;
  constructor(private movieSvc: MovieSerivce) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.movieSvc
      .getAllMovie()
      .subscribe(({ results }: any) => this.detalleMovie(results));
  }

  detalleMovie(data: any) {
    let arrayMovies: any[] = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].poster_path && data[i].overview && data[i].title) {
        arrayMovies.push(data[i]);
      } else {
        this.message = 'No hay datos';
      }
    }
    setTimeout(() => {
      this.loading = false;
      this.movieList = arrayMovies;
    }, 2500);
  }

  onChangeText(value: string) {
    if (value) {
      this.loading = true;
      this.movieSvc
        .findByTitle(value)
        .subscribe(({ results }: any) => this.detalleMovie(results));
    }
  }
}
