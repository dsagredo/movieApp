import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieSerivce } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  detail: any = {};
  isActionComplete: boolean;

  constructor(private router: ActivatedRoute, private movieSvc: MovieSerivce) {
    this.isActionComplete = true;
    this.router.params.subscribe((params) => {
      const id = parseInt(params['id']);
      this.getMovieId(id);
    });
  }

  ngOnInit(): void {
    this.isActionComplete = true;
  }

  getMovieId(id: number) {
    this.movieSvc.getMovieId(id).subscribe((data: any) => {
      this.detail = data;
    });
  }
}
