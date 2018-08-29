import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieDbService } from "../movie-db.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {

  public film: any = {};

  constructor(private route: ActivatedRoute, private filmService: MovieDbService) { }

  ngOnInit() {
    this.getFilm();
  }

  getFilm(): void {
    console.log(this.route)
    const id = +this.route.snapshot.params.id;
    console.log(id);
    this.filmService.getFilm(id)
      .subscribe(film => {
        this.film = film;
        console.log('Dentro de la petición ->' + JSON.stringify(this.film));
      });
  }
}
