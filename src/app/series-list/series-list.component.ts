import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {

  series: Array<any>;
  titulo: String = "Listado de series más vistas";
  constructor(private movieService: MovieDbService) { }

  ngOnInit() {
    console.log("Cargado SerieList");
    this.getSeries();
  }

  getSeries() {
    this.movieService.getSeries().subscribe(
      result => {
        this.series = result.results;
      },
      error => {
        console.log(error);
      }
    )

  }
}
