import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieDbService } from "../movie-db.service";

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})

export class SeriesDetailsComponent implements OnInit {

  public serie: any = {};

  constructor(private route: ActivatedRoute, private movieService: MovieDbService) { }

  ngOnInit() {
    this.getSerie();
  }
  getSerie(): void {
    //console.log(this.route)
    const id = +this.route.snapshot.params.id;
    //console.log(id);
    this.movieService.getSerie(id)
      .subscribe(serie => {
        this.serie = serie;
        console.log('Dentro de la petición ->' + JSON.stringify(this.serie));
      });
  }

}
