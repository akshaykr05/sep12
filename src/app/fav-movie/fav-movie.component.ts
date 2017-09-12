import { Component, OnInit } from '@angular/core';
import { FavCrudService } from '../fav-crud.service';

@Component({
  selector: 'fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css']
})
export class FavMovieComponent implements OnInit {

  constructor(private crudservice: FavCrudService) { }
  favmovies: any;
  ngOnInit() {
    this.crudservice.getFavMovies().subscribe(res => {
      this.favmovies = res;
      console.log(this.favmovies);
    });
  }
  deleteMovie(id: number) {
    this.crudservice.delete(id).subscribe();
    // var value = this.favmovies.find(f => f.id == id);
    // const index = this.favmovies.indexOf(value);
    // this.favmovies.splice(index, 1);
  }
  updateMovie(movie, comment: string) {
    this.crudservice.update(movie, comment).subscribe();
  }
}
