import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MoviesComponent {
  @Input() movieList!: any[];

  constructor() {}
}
