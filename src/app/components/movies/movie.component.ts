import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MoviesComponent {
  @Input() movieList!: any[];
  @Input() message!: string;

  constructor(private router: Router) {}

  onDetailID(idDetail: number) {
    this.router.navigate(['/detail', idDetail]);
  }
}
